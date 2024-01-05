import './style.scss';

export const Time = ({ dataCharacter, onSelectCharacter }) => {

    const handleSelectCharacter = () => {
        onSelectCharacter(dataCharacter);
    };

    return (
        <div className='contentImage' onClick={handleSelectCharacter}>
            <img  src={dataCharacter.images[1]} alt='Teste' />
        </div>
    );
}