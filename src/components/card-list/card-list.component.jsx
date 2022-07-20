import './card-list.styles.css';
import CardContainer from '../card-container/card-container.component.jsx';

const CardList = (props) => {
    const { monsters } = props;

    return (
        <div className='card-list'>
            {monsters.map((monster) =>
                <CardContainer key={monster.id} monster={monster} />
            )}
        </div>
    )
}

export default CardList;

