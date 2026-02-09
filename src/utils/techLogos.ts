// Utility to manage technology logos
import type { ImageMetadata } from 'astro';

// Import all tech logos
import AngularLogo from '../assets/tech/AngularIcon.svg';
import AndroidStudioIcon from '../assets/tech/AndroidStudioIcon.svg';
import CIcon from '../assets/tech/CIcon.svg';
import CPPIcon from '../assets/tech/CPPIcon.svg';
import CSS3Icon from '../assets/tech/CSS3Icon.svg';
import DockerIcon from '../assets/tech/DockerIcon.svg';
import FirebaseIcon from '../assets/tech/FirebaseIcon.svg';
import GitHubActionsIcon from '../assets/tech/GithubActionsIcon.svg';
import GitHubIcon from '../assets/tech/GitHubIcon.svg';
import GitIcon from '../assets/tech/GitIcon.svg';
import HTML5Icon from '../assets/tech/HTML5Icon.svg';
import JavaIcon from '../assets/tech/JavaIcon.svg';
import JavaScriptIcon from '../assets/tech/JavaScriptIcon.svg';
import KotlinIcon from '../assets/tech/KotlinIcon.svg';
import KubernetesIcon from '../assets/tech/KubernetesIcon.svg';
import MongoDBIcon from '../assets/tech/MongoDBIcon.svg';
import NodeJsIcon from '../assets/tech/Node.jsIcon.svg';
import NumPyIcon from '../assets/tech/NumPyIcon.svg';
import PandasIcon from '../assets/tech/PandasIcon.svg';
import PythonIcon from '../assets/tech/PythonIcon.svg';
import PyTorchIcon from '../assets/tech/PyTorchIcon.svg';
import SciKitIcon from '../assets/tech/scikit-learnIcon.svg';
import TensorFlowIcon from '../assets/tech/TensorFlowIcon.svg';
import TypeScriptIcon from '../assets/tech/TypeScriptIcon.svg';
import ComposeIcon from '../assets/tech/ComposeIcon.svg';
import AstroIcon from '../assets/tech/AstroIcon.svg';
import PHPIcon from '../assets/tech/PHPIcon.svg';
import WordPressIcon from '../assets/tech/WordPressIcon.svg';
import PostgresSQLIcon from '../assets/tech/PostgresSQLIcon.svg';
import MySQLIcon from '../assets/tech/MySQLIcon.svg';

export interface TechSkill {
    name: string;
    logo: ImageMetadata;
}

export const techSkills: TechSkill[] = [
    { name: 'Angular', logo: AngularLogo },
    { name: 'Android Studio', logo: AndroidStudioIcon },
    { name: 'C', logo: CIcon },
    { name: 'C++', logo: CPPIcon },
    { name: 'CSS3', logo: CSS3Icon },
    { name: 'Docker', logo: DockerIcon },
    { name: 'Firebase', logo: FirebaseIcon },
    { name: 'GitHub Actions', logo: GitHubActionsIcon },
    { name: 'Git', logo: GitIcon },
    { name: 'GitHub', logo: GitHubIcon },
    { name: 'HTML5', logo: HTML5Icon },
    { name: 'Java', logo: JavaIcon },
    { name: 'JavaScript', logo: JavaScriptIcon },
    { name: 'Kotlin', logo: KotlinIcon },
    { name: 'Kubernetes', logo: KubernetesIcon },
    { name: 'MongoDB', logo: MongoDBIcon },
    { name: 'Node.js', logo: NodeJsIcon },
    { name: 'NumPy', logo: NumPyIcon },
    { name: 'Pandas', logo: PandasIcon },
    { name: 'Python', logo: PythonIcon },
    { name: 'PyTorch', logo: PyTorchIcon },
    { name: 'scikit-learn', logo: SciKitIcon },
    { name: 'TensorFlow', logo: TensorFlowIcon },
    { name: 'TypeScript', logo: TypeScriptIcon },
    { name: 'Compose', logo: ComposeIcon },
    { name: 'Astro', logo: AstroIcon },
    { name: 'PHP', logo: PHPIcon },
    { name: 'WordPress', logo: WordPressIcon },
    { name: 'PostgresSQL', logo: PostgresSQLIcon },
    { name: 'MySQL', logo: MySQLIcon },
];

// Utility function to get logo by tech name
export const getLogoByName = (techName: string): ImageMetadata | null => {
    const normalizedSearch = techName.toLowerCase().replace(/[^a-z0-9]/g, '');

    // Try to find direct match first
    const directMatch = techSkills.find(skill =>
        skill.name.toLowerCase().replace(/[^a-z0-9]/g, '') === normalizedSearch
    );

    if (directMatch) return directMatch.logo;

    // Fallback to glob-based search for flexibility
    const allLogos = import.meta.glob<{ default: ImageMetadata }>('/src/assets/tech/*.svg', { eager: true });
    const entry = Object.entries(allLogos).find(([path]) => {
        const fileName = path.split('/').pop()?.toLowerCase() || '';
        const normalizedFile = fileName.replace(/[^a-z0-9]/g, '').replace('icon', '').replace('logo', '');
        return normalizedFile.includes(normalizedSearch);
    });

    return entry ? entry[1].default : null;
};
