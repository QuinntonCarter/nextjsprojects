import React from 'react';
import menuStyles from '../styles/Menu.module.scss';
import ClickableCharacter from './ClickableCharacter';

const Characters = ({playerLegendData, selectedLegend, hoveredLegend, setHoveredLegend, setSelectedLegend}) => {
    // filters out "global" entry and returns player data to be viewed in selection chart
    const mappedCharacters = Object.entries(playerLegendData).filter(entry => entry[0] !== 'Global').map(entry => entry.keys() !== 'Global' && entry[1].data ? 
        <ClickableCharacter
            selectedLegend={selectedLegend}
            setHoveredLegend={setHoveredLegend}
            setSelectedLegend={setSelectedLegend}
            name={entry[0]}
            data={entry[1].data}
            icon={entry[1].ImgAssets.icon}
            legend={entry} 
        />
        :
        <ClickableCharacter
            selectedLegend={selectedLegend}
            name={entry[0]}
            icon={entry[1].ImgAssets.icon.split(' ').join('%20')}
        />
    )

    return (
        // display: flex; flex-direction: column; overflow: hidden;
        <div>
            {!selectedLegend[0] ?
                hoveredLegend[0] &&
                    <div
                    // border: transparent; background-color: transparent;
                        className={menuStyles.hoveredName}> 
                        {/* maybe h1? */}
                        <h2 className={menuStyles.hoveredNameDisplay}> 
                            {hoveredLegend[0]}
                        </h2>
                    </div>
                    :
                    <div className={menuStyles.hoveredName}> 
                        <h2 className={menuStyles.hoveredNameDisplay}> 
                            {selectedLegend[0]}
                        </h2>
                    </div>
            }
            {/* display: grid; grid-template-columns: auto auto auto auto auto; grid-row-gap: 3%; grid-column-gap: 5%; position: absolute; top: 65vh;  */}
            <div className={menuStyles.characterContainer}>
                {mappedCharacters}
            </div>
        </div>
    )
}

export default Characters;