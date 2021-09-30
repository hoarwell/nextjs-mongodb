import Image from 'next/image';

export const getServerSideProps = async () => {
    const res = await fetch('http://localhost:3000/api/movies');
    const movies = await res.json();
    // const url = process.env.NODE_ENV === "development" ? "http://localhost:3000/" : ""

    return {
        props: {
            movies,
            fallback: false
        }
    }
    // const { db } = await connectToDatabase();
    // const { client } = await connectToDatabase();
    // const movies = await db.collection("movies")
    //                         .find({})
    //                         .sort({ metacritic: -1 })
    //                         .limit(20)
    //                         .toArray();
    // return {
    //     props : {
    //         movies : JSON.parse(JSON.stringify(movies)),
    //         fallback : false,
    //     }
    // }
}

const Movies = ({ movies }) => {
    console.log(movies)
    return (
        <div>
            {
                movies ? movies.map((each) => (
                    <div>
                        <div>
                            <small>{ each.title } { each.year } </small><br />
                            <Image src = { each.poster } width = "100px" height = "100px" /><br />
                            <small>{ each.plot }</small>
                        </div>
                        <br />
                    </div>
                )) : ""
            }
        </div>
    )
}

export default Movies;