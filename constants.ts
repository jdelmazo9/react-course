type Color = 'red' | 'blue'

type Tag = {
    name: string;
    color: Color;
};

type Project = {
    id: string;
    emoji: string;
    title: string;
    description: string;
    tags: string[];
    technicalConcepts: string[];
    link: string;
}

const TAGS: Record<string, Tag> = {
    basic: {
        name: 'Basic',
        color: 'blue'
    },
    advanced: {
        name: 'Advanced',
        color: 'red'
    }
}

const COLOR_CLASS_MAPPING: Record<Color, string> = {
    red: "bg-red-500",
    blue: "bg-blue-500"
}

const PROJECTS: Project[] = [
    { 
        id: "confetti_timer", 
        emoji: "⏱", 
        title: "Confetti Timer",
        description: "Duis tristique lorem at libero semper, placerat luctus metus malesuada. Donec a dignissim neque. Maecenas nisl justo, faucibus in molestie lobortis, imperdiet nec sem. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Sed volutpat laoreet ultricies. Mauris dapibus rutrum suscipit. In erat neque, pellentesque sed neque vel, tempus vestibulum sapien. Vivamus scelerisque eleifend dui eget commodo.",
        tags: ['basic'],
        technicalConcepts: ["concepto 1 test"],
        link: "https://www.github.com"
    },
    { 
        id: "accessible_modal", 
        emoji: "♿️", 
        title: "Accessible Modal",
        description: "Duis tristique lorem at libero semper, placerat luctus metus malesuada. Donec a dignissim neque. Maecenas nisl justo, faucibus in molestie lobortis, imperdiet nec sem. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Sed volutpat laoreet ultricies. Mauris dapibus rutrum suscipit. In erat neque, pellentesque sed neque vel, tempus vestibulum sapien. Vivamus scelerisque eleifend dui eget commodo.",
        tags: ['basic'],
        technicalConcepts: ["concepto 2 test"],
        link: "https://www.github.com"
    },
    { 
        id: "star_match_game", 
        emoji: "🌟", 
        title: "Star Match Game",
        description: "Star Match Game es un juego de matemática para niños. En el primer cuadrante (izquierda) se muestra un número aleatorio de estrellas y en el segundo (derecha) se muestran los números del 1 al 9. En cada paso se debe ir seleccionando una suma de números hasta alcanzar la cantidad de estrellas de la izquierda, el juego se gana cuando se utilizan todos los números posibles. Solo tienes 10 segundos para sumar!",
        tags: ['basic'],
        technicalConcepts: ["concepto 3 test", "concepto star match game"],
        link: "https://www.github.com"
    },
    { 
        id: "spotify_top_100", 
        emoji: "🌎", 
        title: "Spotify Top 100",
        description: "Duis tristique lorem at libero semper, placerat luctus metus malesuada. Donec a dignissim neque. Maecenas nisl justo, faucibus in molestie lobortis, imperdiet nec sem. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Sed volutpat laoreet ultricies. Mauris dapibus rutrum suscipit. In erat neque, pellentesque sed neque vel, tempus vestibulum sapien. Vivamus scelerisque eleifend dui eget commodo.",
        tags: ['basic', 'advanced'],
        technicalConcepts: ["concepto 1 test", "concepto spotify top"],
        link: "https://www.github.com"
    },
    { 
        id: "checkers", 
        emoji: "⚫️", 
        title: "Checkers",
        description: "Duis tristique lorem at libero semper, placerat luctus metus malesuada. Donec a dignissim neque. Maecenas nisl justo, faucibus in molestie lobortis, imperdiet nec sem. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Sed volutpat laoreet ultricies. Mauris dapibus rutrum suscipit. In erat neque, pellentesque sed neque vel, tempus vestibulum sapien. Vivamus scelerisque eleifend dui eget commodo.",
        tags: ['advanced'],
        technicalConcepts: ["concepto 4 test", "concepto checkers"],
        link: "https://www.github.com"
    },
    { 
        id: "rich_text_editor", 
        emoji: "📝",
        title: "Rich Text Editor",
        description: "Duis tristique lorem at libero semper, placerat luctus metus malesuada. Donec a dignissim neque. Maecenas nisl justo, faucibus in molestie lobortis, imperdiet nec sem. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Sed volutpat laoreet ultricies. Mauris dapibus rutrum suscipit. In erat neque, pellentesque sed neque vel, tempus vestibulum sapien. Vivamus scelerisque eleifend dui eget commodo.",
        tags: ['advanced'],
        technicalConcepts: ["concepto 5 test", "concepto rich editor"],
        link: "https://www.github.com"
    },
    { 
        id: "notion_mvp", 
        emoji: "📚", 
        title: "Notion MVP",
        description: "Duis tristique lorem at libero semper, placerat luctus metus malesuada. Donec a dignissim neque. Maecenas nisl justo, faucibus in molestie lobortis, imperdiet nec sem. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Sed volutpat laoreet ultricies. Mauris dapibus rutrum suscipit. In erat neque, pellentesque sed neque vel, tempus vestibulum sapien. Vivamus scelerisque eleifend dui eget commodo.",
        tags: ['advanced'],
        technicalConcepts: ["concepto 1 test", "concepto notion mvp"],
        link: "https://www.github.com"
    },
]

export { PROJECTS, COLOR_CLASS_MAPPING, TAGS }
export type { Tag, Project }