import './style.scss';

export const Character = ({ selectedCharacter }) => {

    return (
        <div className='itemCharacter'>
            <div className='infoText'>
                <h1>{selectedCharacter.name}</h1>
                <p>
                    Duis nunc massa, efficitur in eros in, feugiat lobortis neque. Integer bibendum tempus dignissim. Vestibulum ligula arcu, luctus tristique tincidunt id, 
                    vulputate ut nunc. Nullam vel interdum turpis, at suscipit dui. Donec dignissim mauris lobortis est suscipit mollis.
                </p>
            </div>
            <img src={selectedCharacter.images[1]} alt={selectedCharacter.name} />
        </div>
    );
}