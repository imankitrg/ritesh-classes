import { courses1 } from "@/data/courses";
import { notFound } from "next/navigation";

export default async function CoursePage({ params }) {
    const { slug } = await params;

    const course = courses1.find(
        (item) => item.slug === slug
    );

    if (!course) {
        console.log("course not foucccccnd")
        notFound();
        console.log("course not found")
    }

    return (
        <div className="max-w-7xl mx-auto py-20 px-4">
            <h1 className="text-4xl font-bold">
                {course.title}
            </h1>

            <p className="mt-4">
                {course.description}
            </p>
        </div>
    );
}