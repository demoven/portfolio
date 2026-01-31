// CV Data - Centralized personal and professional information

export interface Language {
    name: string;
    level: string;
    percentage: number;
}

export interface Interest {
    title: string;
    description: string;
    iconPath: string;
}

export interface Internship {
    title: string;
    company: string;
    location: string;
    period: string;
    category: string;
    achievements: string[];
}

export interface Education {
    degree: string;
    institution: string;
    location: string;
    period: string;
    isCurrent?: boolean;
    semesters?: {
        name: string;
        isCurrent: boolean;
        courses: {
            name: string;
            details?: string;
        }[];
    }[];
}

export const personalInfo = {
    name: 'Théo Fernando',
    title: 'Software Engineering Student',
    phone: '+33 7 83 07 99 38',
    email: 'theofernando83@gmail.com',
    cvPdfUrl: '/CV_En_Théo_Fernando.pdf',
    github: 'https://github.com/demoven',
    linkedin: 'https://linkedin.com/in/théo-fernando',
};

export const languages: Language[] = [
    { name: 'French', level: 'Native', percentage: 100 },
    { name: 'English', level: 'Professional Proficiency (B2)', percentage: 75 },
];

export const interests: Interest[] = [
    {
        title: 'Travel',
        description: 'Explored 10+ countries across North America and Europe',
        iconPath: 'M17.8 19.2 16 11l3.5-3.5C21 6 21.5 4 21 3c-1-.5-3 0-4.5 1.5L13 8 4.8 6.2c-.5-.1-.9.1-1.1.5l-.3.5c-.2.5-.1 1 .3 1.3L9 12l-2 3H4l-1 1 3 2 2 3 1-1v-3l3-2 3.7 5.3c.3.4.8.5 1.3.3l.5-.3c.4-.2.6-.7.5-1.2z',
    },
    {
        title: 'Cooking',
        description: 'Passion for culinary arts and international flavors',
        iconPath: 'M6 13.87A4 4 0 0 1 7.41 6.54H7.5a2 2 0 0 1 4.6 0h.1a4 4 0 0 1 1.39 7.32M8 15h2a1 1 0 1 1 0 2H8a1 1 0 1 1 0-2ZM16 15h2a1 1 0 1 1 0 2h-2a1 1 0 1 1 0-2ZM9 19v2M15 19v2M5 20h14a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2Z',
    },
    {
        title: 'Music',
        description: '10 years of piano training at the conservatory',
        iconPath: 'M9 18V5l12-2v13',
    },
];

export const internships: Internship[] = [
    {
        title: 'Web Developer Intern',
        company: 'City of La Seyne-sur-Mer',
        location: 'France',
        period: 'Jun. 2025 - Aug. 2025',
        category: 'Microservices Architecture',
        achievements: [
            'Designed and developed a real-time queue management system using Angular and Node.js.',
            'Integrated the "Publik" API to synchronize appointment data and reduce user wait times.',
            'Collaborated with the municipal team to define requirements and improve the user interface.',
        ],
    },
];

export const education: Education[] = [
    {
        degree: "Double degree (Master's Degree in Computer Science)",
        institution: 'Université du Québec à Chicoutimi (UQAC)',
        location: 'Canada',
        period: 'Aug.2025 - 2027',
        isCurrent: true,
        semesters: [
            {
                name: 'Winter 2026',
                isCurrent: true,
                courses: [
                    { name: 'Advanced Algorithms', details: '(C++)' },
                    { name: 'Machine Learning', details: '(Python)' },
                    { name: '3D & VR', details: '(Unreal Engine)' },
                    { name: 'OOP' },
                ],
            },
            {
                name: 'Fall 2025',
                isCurrent: false,
                courses: [
                    { name: 'Cloud Computing', details: '(Microservices Architecture, Docker, Kubernetes)' },
                    { name: 'Software Engineering' },
                    { name: 'Android Mobile Development', details: '(Kotlin and Jetpack Compose)' },
                    { name: 'Project Management', details: '(Agile Methodologies)' },
                ],
            },
        ],
    },
    {
        degree: 'ERASMUS Exchange semester',
        institution: 'Windesheim',
        location: 'Netherlandss',
        period: 'Sept. 2024 - Jan. 2025',
    },
    {
        degree: 'Engineering Degree in Software Engineering',
        institution: 'ISEN Méditerranée',
        location: 'France',
        period: 'Sept. 2021 - 2027',
    },
];
