import React from 'react';
import menuStyles from '../styles/Menu.module.scss';

const Search = ({platform, player, setPlatform, setPlayer, searchUser, error}) => {
    return (
        // display: flex; flex-direction: column; space-y(?): 3;
            <div className={menuStyles.inputStyles}>
                {/* display: flex; flex-direction: row; space-y: 3; padding: 8px; */}
                <div>
                    {/* flex-direction: row; display: flex; */}
                    <form onChange={e => setPlatform(e.target.value)} title='Platform options'>
                        <label htmlFor='PS4'> Playstation </label>
                        <input name='PS4' type='radio' value='PS4'/>
                        <label htmlFor='Xbox'> Xbox </label>
                        <input name='Xbox' type='radio' value='X1'/>
                        <label htmlFor='PC'> PC </label>
                        <input name='PC' type='radio' value='PC'/>
                    </form>
                    {/* width: auto;  */}
                    <input
                        type='text'
                        width='auto'
                        placeholder='player name'
                        onChange={e => setPlayer(e.target.value)}
                        title={!platform ? 'Select a platform first' : 'Enter a player name'}
                        disabled={!platform}/>
                    <button
                        variant='outline'
                        title={!platform || !player ? 'Select platform and enter user information' : 'Click search'}
                        disabled={!platform || !player} 
                        onClick={searchUser}> find player </button>
                    <br/>
                </div>
                {/* color: red; font-size: 3vh; */}
                <h2> {error} </h2>
                {/* figure out error handling for display here */}
            </div>
    )
}

export default Search;