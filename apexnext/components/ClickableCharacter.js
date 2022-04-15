import React from 'react';
// imported to prevent prerendering issue when using next/image
import { Image } from '@chakra-ui/image';
import menuStyles from '../styles/Menu.module.scss';

const ClickableCharacter = ({name, legend, data, icon, selectedLegend, setHoveredLegend, setSelectedLegend}) => {
    // set css styling based on data present; import from module.css
    const selectable = data ? (selectedLegend[0] === name ? menuStyles.selected : menuStyles.selectable ) : menuStyles.notSelectable

    return (
        <>
        { data ?
        // display: flex; flex-direction: column; align-items: center; border: solid 2.7px gray;
            <div
                onMouseEnter={() => setHoveredLegend(legend)}
                onMouseLeave={() => setHoveredLegend('')}
                onClick={() => setSelectedLegend(legend)}
                className={`${selectable} `}
                title={`click to select ${name}`}>
                    {/* background-color: transparent; */}
                    <div>
                        {/* width: auto; height: 100%; position: relative; transform: skewX(18deg) */}
                        <Image
                            src={icon}
                            alt={`${name} selectable icon in menu`}
                            w={'auto'}
                            h={'100%'}
                            position={'relative'}
                            transform={'skewX(18deg)'}
                        />
                    </div>
                <h6 style={{ backgroundColor:`${selectedLegend[0] === name ? 'orange' : 'gray'}` }}>
                    <p className={menuStyles.selectableName}> {name} </p>
                </h6>
            </div>
        :
        // display: flex; flex-direction: column; border: 2.7px solid gray; align-items: center;
            <div
                className={`${selectable}`}
                title={`No player data provided by API for ${name}`}>
                    {/* width: auto; height: 100%; position: relative; filter: grayscale(100%); transform: skewX(18deg) */}
                    <Image
                        src={icon}
                        alt={`${name} none selectable icon in menu`}
                        w={'auto'}
                        h={'100%'}
                        position={'relative'}
                        transform={'skewX(18deg'}
                    />
                    {/* maybe don't need div here? */}
                    {/* <Text> */}
                    {/* color: rgb(161, 161, 161) */}
                        <p className={menuStyles.selectableName} style={{ color:'rgb(161, 161, 161)' }}> {name} </p>
                    {/* </Text> */}
            </div>
        }
    </>
    )
}

export default ClickableCharacter;