import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const SearchComponent: React.FC = () => {
    const [searchKey, setSearchKey] = useState("")
    const navigate = useNavigate();

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()

        if (searchKey) {
            navigate(`/search_results/${searchKey}`)
        }
    }

    return (
        <form onSubmit={handleSubmit} className="">


            <input type="text" className=' h-auto w-auto border-2 outline-none rounded-sm  border-bord bg-transparent p-2' placeholder='Search.....' onChange={(e) => setSearchKey(e.target.value)} />

        </form>
    );
};

export default SearchComponent;
