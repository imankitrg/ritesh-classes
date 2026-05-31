import {
    GraduationCap,
    BookOpen,
    Calculator,
    ArrowRight,
    CalendarDays,
    BadgeCheck,
} from "lucide-react";

const iconMap = {
    graduation: GraduationCap,
    book: BookOpen,
    calculator: Calculator,
    arrowRight: ArrowRight,
    calendarDays: CalendarDays,
    badgeCheck: BadgeCheck,
};


export const courses1 = [
    {
        slug: "8th-to-10th-foundation",
        title: "8th To 10th Foundation",
        icon: "graduation",
        image: "/home/banner1.webp",
        duration: "Academic Program",
        subjects: "Maths, Science & English",
        description:
            "Strong academic foundation with weekly tests, mentorship, doubt solving, and board-focused preparation.",
        batches: "Morning & Evening Batches",
    },
    {
        slug: "10th-ssc-board",
        title: "10th SSC Board",
        icon: "book",
        image: "/home/ssc.webp",
        duration: "Board Focused",
        subjects: "All SSC Subjects",
        description:
            "Complete SSC preparation with prelims, revision lectures, paper solving, and exam guidance.",
        batches: "Limited Student Batch",
    },
    {
        slug: "fyjc-syjc",
        title: "FYJC & SYJC",
        icon: "calculator",
        image: "/home/ssc.webp",
        duration: "Junior College",
        subjects: "Commerce & Science",
        description:
            "Concept-based teaching with personal attention, regular tests, and career guidance sessions.",
        batches: "Weekly Practice Sessions",
    },
    {
        slug: "degree-section",
        title: "Degree Section",
        icon: "graduation",
        image: "/home/mainmu.webp",
        duration: "University Support",
        subjects: "Focused Academic Guidance",
        description:
            "Professional mentorship and exam-oriented learning environment for degree students.",
        batches: "Flexible Timings",
    },
];