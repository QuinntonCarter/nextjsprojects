import React, { useState } from 'react';
import Header from './Header.js';
import StatsViewer from './StatsViewer.js';
import Search from './Search.js';
import axios from 'axios';
import { Flex } from '@chakra-ui/react';

import ThreeScene from './scene/ThreeScene.js';

const apexAPI = axios.create({
    baseURL: process.env.NEXT_PUBLIC_APEXAPIURL
})

const Layout = ({children}) => {
    const [ platform, setPlatform ] = useState(false);
    const [ player, setPlayer ] = useState(null);

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
                    playerLvl: res.data.global?.level,
                    totalData: res.data.total,
                    banStatus: [res.data.global.bans],
                    currentArenaRank: [res.data.global?.arena],
                    currentBrRank: [res.data.global.rank],
                    recentlyUsedLegend: res.data.legends.selected
            }), setPlayerLegendData(res.data.legends.all)
        }})
        .catch(err => showError(err.response.data.Error))

    }
    
    // doesn't work
    const showError = err => {
        setError(err)
    }

    const parsedPlayerLegendData = Object.entries(playerLegendData).filter(entry => entry[1].data)

    return (
        <>
            <Flex flexDirection={'column'} >
                <Header/>
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
                    recentlyUsedLegend={foundStats.recentlyUsedLegend}
                    parsedLegendData={parsedPlayerLegendData}
                    playerLegendData={playerLegendData}
                />
                {/* {children} */}
                {/* move hoveredLegend and selectedLegend states to top so can be passed to this component */}
            </Flex>
            {/* <ThreeScene /> */}
        </>
    )
}

export default Layout;