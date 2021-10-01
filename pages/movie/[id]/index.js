import { useRouter } from 'next/router';

const movie = () => {
    const query = useRouter().query;
    
    return (
        <div>
            { query.id }
        </div>
    )
}

export default movie;