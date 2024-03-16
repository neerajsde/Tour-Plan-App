import Card from "./Card";

function Items(props) {
    return (
        <div className='cards-container'>
            {props.stateData.map(item => (
                <Card key={item.id} {...item} removeCard={props.removeCard}></Card>
            ))}
        </div>
    );
}

export default Items;
