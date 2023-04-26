import React, { useEffect } from 'react'
import AddTitle from '../layouts/AddTitle'
import Card from '../components/Card'
import { useSelector, useDispatch } from 'react-redux';
import loadTalks from '../thunk/loadTalks';

export default function Home() {
    const {
        blogReducer,
        filterReducer
    } = useSelector(state => state)
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(loadTalks())
    }, [])
    return (
        <AddTitle title="Home | HeadBangers Talks">
            <div className="container">
                <div className='flex items-center justify-end mt-10'>

                    <button className={`btn-outline btn btn-sm text-xs rounded-full mx-2 font-metal ${filterReducer.filteredBy === "" ? "" : ""}`}>
                        last upload
                    </button>
                    <button className={`btn-outline btn btn-sm text-xs rounded-full mx-2 font-metal ${filterReducer.filteredBy === "" ? "" : ""}`}>
                        first upload
                    </button>

                </div>


                <main className="container mx-auto py-16">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8">
                        {
                            blogReducer.talks && blogReducer.talks.map((b) => (
                                <Card
                                    key={b._id}
                                    title={b.title}
                                    description={b.description}
                                    imageUrl={b.imageUrl}
                                    link={b.link}
                                />
                            ))
                        }
                    </div>
                </main>
            </div>
        </AddTitle >
    )
}
