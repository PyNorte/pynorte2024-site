import { Badge } from "@/components/badge";
import { LinkTitleToContent } from "@/components/link-title-to-content";

import icetUfam from '@/assets/logo_icet.png'; import Image from "next/image";

const categories = {
    OURO: {
        id: 1,
        title: "OURO",
        color: "bg-sunset-500"
    },
    PRATA: {
        id: 2,
        title: "PRATA",
        color: "bg-river-400"
    },
    BRONZE: {
        id: 3,
        title: "BRONZE",
        color: "bg-sunset-700"
    },
    APOIO: {
        id: 4,
        title: "APOIO",
        color: "bg-forest-800"
    },
};

const sponsors = [
    // {
    //     id: 1,
    //     title: "Python",
    //     category: categories.OURO,
    //     image: '',
    // },
    // {
    //     id: 2,
    //     title: "Python",
    //     category: categories.OURO,
    //     image: '',
    // },
    // {
    //     id: 4,
    //     title: "Python",
    //     category: categories.PRATA,
    //     image: '',
    // },
    // {
    //     id: 5,
    //     title: "Python",
    //     category: categories.PRATA,
    //     image: '',
    // },
    // {
    //     id: 7,
    //     title: "Python",
    //     category: categories.BRONZE,
    //     image: '',
    // },
    // {
    //     id: 8,
    //     title: "Python",
    //     category: categories.BRONZE,
    //     image: '',
    // },
    {
        id: 10,
        title: "ICET/UFAM",
        category: categories.APOIO,
        image: icetUfam
    },
    // {
    //     id: 11,
    //     title: "Python",
    //     category: categories.APOIO,
    //     image: '',
    // },
]

export function Sponsors() {
    const categoryWithSponsors = Object.values(categories).filter(category => sponsors.some(sponsor => sponsor.category == category));
    const apoioExists = categoryWithSponsors.some(category => category.title === "APOIO");
    const apoioSponsers = sponsors.filter(sponsor => sponsor.category.title === "APOIO");

    return (
        <div className="space-y-12 text-center lg:text-left">
            <LinkTitleToContent title="Patrocinadores" hrefId="sponsors" />

            <div className="grid gap-3 lg:grid-cols-3 justify-items-center">
                {categoryWithSponsors.map(category => (
                    <div key={category.id} className="flex flex-col items-center mb-4 lg:mb-0">
                        {sponsors.filter(sponsor => sponsor.category === category && sponsor.category.title !== "APOIO").map(sponsor => (
                            <div className="bg-sunset-50 p-6 rounded mb-4">
                                <Image
                                    className="h-28 w-auto"
                                    src={sponsor.image}
                                    alt={sponsor.title}
                                    width={172}
                                    height={120}
                                />
                            </div>
                        ))}
                        {category.title !== "APOIO" && <Badge color={category.color} title={category.title} />}
                    </div>
                ))}
            </div>
            {apoioExists && (
                <div className="grid gap-3 lg:grid-cols-1 justify-items-center">
                    {apoioSponsers.map(sponsor => (
                        <div key={sponsor.id} className="bg-sunset-50 p-6 rounded mb-4">
                            <Image
                                className="h-28 w-auto"
                                src={sponsor.image}
                                alt={sponsor.title}
                                width={172}
                                height={120}
                            />
                        </div>
                    ))}
                    <Badge title={categories.APOIO.title} color={categories.APOIO.color} />
                </div>
            )}
        </div>
    );
}