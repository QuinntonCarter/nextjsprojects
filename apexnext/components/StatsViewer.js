import React, { useState } from 'react';
import Image from 'next/image';
import menuStyles from '../styles/Menu.module.scss';

import apexLogoWhite from '../public/apex-logo-white.png';

import smoke from '../public/0000.png'
import smoke2 from '../public/0005.png'


import Characters from './Characters';
import SelectedCharacter from './SelectedCharacter';

const StatsViewer = ({player, foundStats, selectedLegend, setSelectedLegend, hoveredLegend, setHoveredLegend, recentlyUsedLegend, parsedLegendData, playerLegendData}) => {
    const [ killsAsLegend, setKillsAsLegend ] = useState([]);

    // let viewableName = !hoveredLegend[0] ? selectedLegend[0] : hoveredLegend[0]

    return (
        <div className={menuStyles.mainContainer}>
            {foundStats.totalData &&
            <>
            <Image src={smoke} alt="smoke background image" className={menuStyles.smokeBG_one} position={'absolute'} zIndex={0}/>
            <Image src={smoke2} alt="smoke background image" className={menuStyles.smokeBG_two} position={'absolute'} zIndex={0}/>
                <div>
                    {/* display: flex; flex-direction: column; height: auto; width: 100% */}
                    <div>
                        <p className={menuStyles.totalKills}> {`${player} Total Kills ${foundStats.totalData?.kills.value}`} </p>
                        {/* display: flex; flex-direction: row; */}
                        <div>
                            {/* display: grid; grid-template-columns: repeat(2, 1fr) */}
                            <div>
                                <SelectedCharacter
                                    // position={'relative'}
                                    recentlyUsedLegend={recentlyUsedLegend}
                                    foundStats={foundStats}
                                    hoveredName={hoveredLegend[0]}
                                    hoveredData={hoveredLegend[1]}
                                    selectedLegend={selectedLegend}
                                    setKillsAsLegend={setKillsAsLegend}
                                />
                                <Characters
                                    styles={{position: 'absolute'}}
                                    legends={foundStats}
                                    // parsedLegendData={parsedLegendData}
                                    playerLegendData={playerLegendData}
                                    hoveredLegend={hoveredLegend}
                                    selectedLegend={selectedLegend}
                                    setHoveredLegend={setHoveredLegend}
                                    setSelectedLegend={setSelectedLegend}
                                    />
                            </div>
                            {/* display of hovered characters and selected */}
                        </div>
                    </div>
                </div>
            </>
            }
            <div
            // position: absolute; overflow: hidden; background-size: 22vh; background-repeat: no-repeat; display: none (unless foundStats.totalData)
                style={{ display: `${!foundStats.totalData && 'none' }`}}
                backgroundimage={selectedLegend[1] && selectedLegend[1]?.ImgAssets.icon}
                className={menuStyles.characterDisplay}>
                    {/* font-size: 2.7vh */}
                <div fontSize={'2.7vh'} onClick={() => selectedLegend[1] && setSelectedLegend('')}>
                    {selectedLegend[0] ?
                    // display: flex; flex-direction: row;
                        <div>
                            <Image
                                src={apexLogoWhite}
                                width={'60px'}
                                height={'50px'}
                                alt='Apex logo white'/>
                                {/* text-align: center; display: flex; flex-direction: column */}
                            <div>
                                {/* margin 0 1.9vh fontsize */}
                                <h4 margin={0} fontSize={'1.9vh'}> {player} </h4>
                                {/* margin 0 2.2vh fontsize */}
                                <h4 margin={0} fontSize={'2.2vh'}> {selectedLegend[0]} </h4>
                            </div>
                        </div>
                    :
                    // displa: flex; flex-direction: row
                    <div className=''>
                        <Image
                            src={apexLogoWhite}
                            width={'50vw'}
                            height={'50vh'}
                            alt='Apex logo white'/>
                            {/* textalign=center fontsize=1.9vh */}
                        <span>
                            {player}
                        <br/>
                        {/* fontsize 2.2vh */}
                            <h5> Now Selecting </h5>
                        </span> 
                    </div>    
                    }
                </div>
            </div>
        </div>
    )
}

export default StatsViewer;