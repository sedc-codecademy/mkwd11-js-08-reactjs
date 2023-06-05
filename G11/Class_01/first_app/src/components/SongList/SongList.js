import { Fragment } from 'react'
import './SongList.css';

const SongList = () => {
    const subHeading = 'Most popular songs list'

    const popularSongs = [
        {id: 1, name: 'Calm Down', artist: 'Rema & Selena Gomez'},
        {id: 2, name: 'Flowers', artist: 'Miley Cyros'},
        {id: 3, name: 'Hello', artist: 'Adele'},
        {id: 4, name: 'Hello', artist: 'From Artist unknown'},

    ];

    return (

    
        // Error: JSX EXPRESSION MUST HAVE ONE PARENT ELEMENT
        // <h3>Song list component</h3>
        // <p>{subHeading}</p>

        // Solution One
        // <Fragment>
        //     <h3>Song list component</h3>
        //     <p>{subHeading}</p>
        // </Fragment>

        // Solution Two <> </> => Fragment but more shorter
        // <>
        //     <h3>Song list component</h3>
        //     <p>{subHeading}</p>
        // </>

        // Fragment, React.Fragment and <> </>
        // are the same, they do not exist and are not
        // represented in the DOM =)
        
        // Solution three
        <div>
            <h3>Song list component</h3>
            <p>{subHeading}</p>

            <hr />
            {/* This is awesome but what if we had 10000 songs? */}
            {/* <ul>
                Popular songs:
                <li>Name: {popularSongs[0].name} by: {popularSongs[0].artist} </li>
                <li>Name: {popularSongs[1].name} by: {popularSongs[1].artist} </li>
                <li>Name: {popularSongs[2].name} by: {popularSongs[2].artist} </li>
            </ul> */}

            <ul className='songContainer'>
                Popular songs:
                {
                    popularSongs.map((song) => {
                        
                        // when we iterate the returned element from 
                        // the iteration MUST have key property with UNIQUE value as it's value
                        return (
                            <li key={song.id}>Name: {song.name} by: {song.artist} </li>
                        )

                    })
                }
            </ul>

        </div>

    )
};


export default SongList;