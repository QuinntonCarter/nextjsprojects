import React, { useState } from 'react';
import axios from 'axios';
import Header from './Header.js';
import Search from './Search.js';
import StatsViewer from './StatsViewer.js';
import menuStyles from '../styles/Menu.module.scss';

import smoke3 from '../public/0010.png'
import smoke4 from '../public/0020.png'
import smoke5 from '../public/0030.png'
import smoke6 from '../public/0040.png'
import smoke7 from '../public/0050.png'

const apexAPI = axios.create({
    baseURL: process.env.NEXT_PUBLIC_APEXAPIURL
})

const Layout = (props) => {
    const [ platform, setPlatform ] = useState(false);
    const [ player, setPlayer ] = useState(null);

    const [ hoveredLegend, setHoveredLegend ] = useState([]);
    const [ selectedLegend, setSelectedLegend ] = useState([]);

    const [ foundStats, setFoundStats ] = useState({});
    const [ error, setError ] = useState([]);
    const [ playerLegendData, setPlayerLegendData ] = useState([]);

    const [ loading, setLoading ] = useState(false);

    const searchUser = () => {
        apexAPI({
            method: 'GET',
            params: {
                platform: platform,
                player: player,
                auth: process.env.NEXT_PUBLIC_APEXAPIACCESS
            }
        })
        .then(res => {
            if(res.data.Error){
                showError(res.data.Error)
            } else {
            setFoundStats({
                
                // ** assign this all to variables to be passed down to statsviewer **
                    playerName: res.data.global.name,
                    playerLvl: res.data.global.level,
                    totalData: res.data.total,
                    banStatus: [res.data.global.bans],
                    currentArenaRank: [res.data.global.arena],
                    currentBrRank: [res.data.global.rank],
                    recentlyUsedLegend: res.data.legends.selected
            }), setPlayerLegendData(res.data.legends.all)
        }})
        .catch(err => showError(err.response.data.Error))
    }

    const showError = err => {
        setError(err)
    }

    const parsedPlayerLegendData = Object.entries(playerLegendData).filter(entry => entry[1].data)

    return (
        <>
            <div>
                {/* {/* <Image src={smoke2} alt="smoke background image" className={menuStyles.smokeBG_two} position={'absolute'} zIndex={0} left={'-100'}/> */}
                {/* <Image src={smoke3} alt="smoke background image" className={menuStyles.smokeBG_three} position={'absolute'} zIndex={0}/>
                <Image src={smoke4} alt="smoke background image" className={menuStyles.smokeBG_four} position={'absolute'} zIndex={0}/>
                <Image src={smoke5} alt="smoke background image" className={menuStyles.smokeBG_five} position={'absolute'} zIndex={0}/>
                <Image src={smoke6} alt="smoke background image" className={menuStyles.smokeBG_six} position={'absolute'} zIndex={0}/>
                <Image src={smoke7} alt="smoke background image" className={menuStyles.smokeBG_seven} position={'absolute'} zIndex={0}/> */}
                <Header playerLegendData={playerLegendData}/>
                <Search
                    platform={platform}
                    setPlatform={setPlatform}
                    player={player}
                    error={error}
                    setPlayer={setPlayer}
                    searchUser={searchUser}
                    foundStats={foundStats}
                />
                <StatsViewer
                    player={player}
                    foundStats={foundStats}
                    selectedLegend={selectedLegend}
                    setSelectedLegend={setSelectedLegend}
                    hoveredLegend={hoveredLegend}
                    setHoveredLegend={setHoveredLegend}
                    recentlyUsedLegend={foundStats.recentlyUsedLegend}
                    parsedLegendData={parsedPlayerLegendData}
                    playerLegendData={playerLegendData}
                />
                {props.children}
            </div>
        </>
    )
};

export default Layout;