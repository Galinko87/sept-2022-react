import {Simpson} from "../Simpson/Simpson";

const Simpsons = () => {
    const simpsons = [
        {
            id:1,
            name:'Bart',
            surname:'Simpson',
            image:'https://www.hollywoodreporter.com/wp-content/uploads/2012/02/bart_simpson.jpg?w=2000&h=1126&crop=1'
        },
        {
            id:2,
            name:'Lisa',
            surname:'Simpson',
            image:'https://upload.wikimedia.org/wikipedia/en/e/ec/Lisa_Simpson.png'
        },
        {
            id:3,
            name:'Homer',
            surname:'Simpson',
            image:'https://cdn.britannica.com/29/144429-050-61A53120/Homer-Simpson-scene-The-Simpsons-TV-series.jpg?w=300&h=169&c=crop'
        },
    ]
    return (
        <div>
            {
                //simpsons.map(simpson=> <Simpson key={simpson.id} name={simpson.name} surname={simpson.surname} image={simpson.image} />)
                simpsons.map(simpson=> <Simpson key={simpson.id} simpson={simpson}/> )
            }
        </div>
    );
};

export {Simpsons};