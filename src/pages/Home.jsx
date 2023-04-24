import React from 'react'
import AddTitle from '../layouts/AddTitle'
import Card from '../components/Card'

export default function Home() {
    const metalBlogs = [
        {
            title: "The Evolution of Heavy Metal Music",
            description: "Explore the history and evolution of heavy metal music from its origins to the modern era.",
            imageUrl: "https://media.istockphoto.com/id/1163457833/vector/3d-heavy-metal-alphabet-font-metal-effect-letters-and-numbers.jpg?s=612x612&w=0&k=20&c=RoiYuLU2NtBnfvpfEiBzRIBIx3MeAg_A68qWdmGm3fw=",
            link: "https://example.com/blog1",
        },
        {
            title: "10 Classic Heavy Metal Albums You Must Listen To",
            description: "Discover 10 classic heavy metal albums that every metalhead should listen to for an authentic metal experience.",
            imageUrl: "https://img.freepik.com/free-vector/vintage-monochrome-rock-gesture-concept_225004-1211.jpg",
            link: "https://example.com/blog2",
        },
        {
            title: "The Influence of Heavy Metal on Popular Culture",
            description: "Learn about the significant impact of heavy metal music on various aspects of popular culture, including fashion, art, and movies.",
            imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJ5uezqoId058HTC7U59AMNECqZLWHMY564rCzxLoDRw&s",
            link: "https://example.com/blog3",
        },
        {
            title: "The Importance of Lyrics in Heavy Metal Music",
            description: "Explore the deep and meaningful lyrics in heavy metal songs and how they convey powerful messages and emotions.",
            imageUrl: "https://thumbs.dreamstime.com/b/rock-roll-heavy-metal-sign-horns-party-hard-rock-roll-heavy-metal-sign-horns-party-104504103.jpg",
            link: "https://example.com/blog4",
        },
        {
            title: "The Subgenres of Heavy Metal Music",
            description: "Discover the different subgenres of heavy metal music, from death metal to power metal, and their unique characteristics.",
            imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZGCHGkmk5EOAJmHePF3RBNjS132C16NPaIw&usqp=CAU",
            link: "https://example.com/blog5",
        },
    ];

    return (
        <AddTitle title="Home | HeadBangers Talks">
            <div className="">


                <main className="container mx-auto px-4 py-16">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8">
                        {metalBlogs.map((b) => (
                            <Card key={b.id} title={b.title} description={b.description} imageUrl={b.imageUrl} link={b.link} />
                        ))}
                    </div>
                </main>
            </div>
        </AddTitle>
    )
}
