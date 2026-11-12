/**
 * CloudFlow - Catalogue d'outils numériques
 * Structure de données pour les 200+ outils
 */

const TOOLS_CATALOG = {
    categories: [
        { id: 'ai', name: 'Intelligence Artificielle', icon: 'fa-brain' },
        { id: 'productivity', name: 'Productivité', icon: 'fa-bolt' },
        { id: 'project-management', name: 'Gestion de Projets', icon: 'fa-tasks' },
        { id: 'design', name: 'Design et Création', icon: 'fa-palette' },
        { id: 'development', name: 'Développement Web', icon: 'fa-code' },
        { id: 'marketing', name: 'Marketing Digital', icon: 'fa-bullhorn' },
        { id: 'communication', name: 'Communication', icon: 'fa-comments' },
        { id: 'business', name: 'Business', icon: 'fa-briefcase' },
        { id: 'finance', name: 'Gestion Financière', icon: 'fa-chart-line' },
        { id: 'storage', name: 'Stockage et Organisation', icon: 'fa-cloud' },
        { id: 'automation', name: 'Automatisation', icon: 'fa-cogs' },
        { id: 'analytics', name: 'Analyse et Données', icon: 'fa-chart-bar' }
    ],
    
    pricing: {
        free: 'Gratuit',
        freemium: 'Freemium',
        paid: 'Payant'
    },

    tools: [
        // Intelligence Artificielle
        {
            id: 'chatgpt',
            name: 'ChatGPT',
            description: 'Assistant IA conversationnel pour répondre à vos questions et aider dans diverses tâches.',
            category: 'ai',
            pricing: 'freemium',
            url: 'https://chat.openai.com',
            logo: 'https://upload.wikimedia.org/wikipedia/commons/0/04/ChatGPT_logo.svg',
            popular: true,
            new: false
        },
        {
            id: 'claude',
            name: 'Claude',
            description: 'IA d\'Anthropic pour l\'analyse de documents et la génération de contenu.',
            category: 'ai',
            pricing: 'freemium',
            url: 'https://claude.ai',
            logo: 'https://upload.wikimedia.org/wikipedia/commons/5/5e/Claude_logo.png',
            popular: true,
            new: true
        },
        {
            id: 'midjourney',
            name: 'Midjourney',
            description: 'Générateur d\'images par IA accessible via Discord.',
            category: 'ai',
            pricing: 'paid',
            url: 'https://www.midjourney.com',
            logo: 'https://upload.wikimedia.org/wikipedia/commons/3/3c/Midjourney_logo.png',
            popular: true,
            new: false
        },
        {
            id: 'dall-e',
            name: 'DALL-E',
            description: 'Générateur d\'images par OpenAI intégré à ChatGPT.',
            category: 'ai',
            pricing: 'paid',
            url: 'https://openai.com/dall-e-3',
            logo: 'https://upload.wikimedia.org/wikipedia/commons/6/6d/DALL-E_logo.png',
            popular: false,
            new: false
        },
        {
            id: 'perplexity',
            name: 'Perplexity',
            description: 'Moteur de recherche alimenté par l\'IA pour des réponses directes.',
            category: 'ai',
            pricing: 'freemium',
            url: 'https://www.perplexity.ai',
            logo: 'https://upload.wikimedia.org/wikipedia/commons/4/4e/Perplexity_logo.png',
            popular: true,
            new: true
        },
        {
            id: 'gemini',
            name: 'Google Gemini',
            description: 'IA multimodale de Google pour texte, image et code.',
            category: 'ai',
            pricing: 'freemium',
            url: 'https://gemini.google.com',
            logo: 'https://upload.wikimedia.org/wikipedia/commons/8/8a/Google_Gemini_logo.svg',
            popular: true,
            new: true
        },
        {
            id: 'copilot',
            name: 'GitHub Copilot',
            description: 'Assistant IA pour les développeurs.',
            category: 'ai',
            pricing: 'paid',
            url: 'https://github.com/features/copilot',
            logo: 'https://upload.wikimedia.org/wikipedia/commons/2/3e/GitHub_Copilot_logo.svg',
            popular: true,
            new: false
        },
        {
            id: 'runway',
            name: 'Runway',
            description: 'Outil IA pour création vidéo et montage.',
            category: 'ai',
            pricing: 'freemium',
            url: 'https://runwayml.com',
            logo: 'https://upload.wikimedia.org/wikipedia/commons/4/4e/Runway_logo.svg',
            popular: true,
            new: true
        },
        {
            id: 'stability-ai',
            name: 'Stability AI',
            description: 'Générateur d\'images Stable Diffusion.',
            category: 'ai',
            pricing: 'freemium',
            url: 'https://stability.ai',
            logo: 'https://upload.wikimedia.org/wikipedia/commons/4/4e/Stability_AI_logo.svg',
            popular: true,
            new: true
        },
        {
            id: 'huggingface',
            name: 'Hugging Face',
            description: 'Plateforme de modèles IA open source.',
            category: 'ai',
            pricing: 'freemium',
            url: 'https://huggingface.co',
            logo: 'https://upload.wikimedia.org/wikipedia/commons/4/4e/Hugging_Face_logo.svg',
            popular: true,
            new: false
        },
        {
            id: 'cursor',
            name: 'Cursor',
            description: 'Éditeur de code IA.',
            category: 'ai',
            pricing: 'freemium',
            url: 'https://cursor.sh',
            logo: 'https://upload.wikimedia.org/wikipedia/commons/4/4e/Cursor_logo.svg',
            popular: true,
            new: true
        },
        {
            id: 'jenni',
            name: 'Jenni AI',
            description: 'Assistant IA pour rédaction académique.',
            category: 'ai',
            pricing: 'freemium',
            url: 'https://jenni.ai',
            logo: 'https://upload.wikimedia.org/wikipedia/commons/4/4e/Jenni_AI_logo.svg',
            popular: false,
            new: true
        },
        {
            id: 'copy-ai',
            name: 'Copy.ai',
            description: 'IA pour copywriting et marketing.',
            category: 'ai',
            pricing: 'freemium',
            url: 'https://copy.ai',
            logo: 'https://upload.wikimedia.org/wikipedia/commons/4/4e/Copy_ai_logo.svg',
            popular: true,
            new: false
        },
        {
            id: 'jasper',
            name: 'Jasper',
            description: 'IA pour création de contenu marketing.',
            category: 'ai',
            pricing: 'paid',
            url: 'https://www.jasper.ai',
            logo: 'https://upload.wikimedia.org/wikipedia/commons/4/4e/Jasper_logo.svg',
            popular: true,
            new: false
        },
        {
            id: 'writesonic',
            name: 'Writesonic',
            description: 'IA pour rédaction de contenu.',
            category: 'ai',
            pricing: 'freemium',
            url: 'https://writesonic.com',
            logo: 'https://upload.wikimedia.org/wikipedia/commons/4/4e/Writesonic_logo.svg',
            popular: false,
            new: false
        },
        {
            id: 'character-ai',
            name: 'Character.AI',
            description: 'IA conversationnelle avec personnages.',
            category: 'ai',
            pricing: 'freemium',
            url: 'https://character.ai',
            logo: 'https://upload.wikimedia.org/wikipedia/commons/4/4e/Character_AI_logo.svg',
            popular: true,
            new: true
        },
        
        // Productivité
        {
            id: 'notion',
            name: 'Notion',
            description: 'Espace de travail tout-en-un pour notes, tâches et bases de données.',
            category: 'productivity',
            pricing: 'freemium',
            url: 'https://www.notion.so',
            logo: 'https://upload.wikimedia.org/wikipedia/commons/4/45/Notion_app_logo.png',
            popular: true,
            new: false
        },
        {
            id: 'trello',
            name: 'Trello',
            description: 'Gestion de projet avec tableaux Kanban visuels.',
            category: 'productivity',
            pricing: 'freemium',
            url: 'https://trello.com',
            logo: 'https://upload.wikimedia.org/wikipedia/commons/7/7a/Trello_logo-blue.svg',
            popular: true,
            new: false
        },
        {
            id: 'asana',
            name: 'Asana',
            description: 'Gestion de projet et collaboration d\'équipe.',
            category: 'productivity',
            pricing: 'freemium',
            url: 'https://asana.com',
            logo: 'https://upload.wikimedia.org/wikipedia/commons/4/46/Asana_logo.svg',
            popular: true,
            new: false
        },
        {
            id: 'todoist',
            name: 'Todoist',
            description: 'Gestionnaire de tâches simple et puissant.',
            category: 'productivity',
            pricing: 'freemium',
            url: 'https://todoist.com',
            logo: 'https://upload.wikimedia.org/wikipedia/commons/6/6e/Todoist_logo.png',
            popular: true,
            new: false
        },
        {
            id: 'obsidian',
            name: 'Obsidian',
            description: 'Application de prise de notes basée sur Markdown.',
            category: 'productivity',
            pricing: 'free',
            url: 'https://obsidian.md',
            logo: 'https://upload.wikimedia.org/wikipedia/commons/6/6f/Obsidian_logo.png',
            popular: true,
            new: false
        },
        {
            id: 'linear',
            name: 'Linear',
            description: 'Outil de gestion de projet pour équipes de développement.',
            category: 'productivity',
            pricing: 'freemium',
            url: 'https://linear.app',
            logo: 'https://upload.wikimedia.org/wikipedia/commons/6/6f/Linear_logo.png',
            popular: true,
            new: true
        },
        {
            id: 'clickup',
            name: 'ClickUp',
            description: 'Plateforme de gestion de projet tout-en-un.',
            category: 'productivity',
            pricing: 'freemium',
            url: 'https://clickup.com',
            logo: 'https://upload.wikimedia.org/wikipedia/commons/1/1c/ClickUp_logo.svg',
            popular: true,
            new: true
        },
        {
            id: 'monday',
            name: 'Monday.com',
            description: 'Plateforme de gestion de travail et collaboration.',
            category: 'productivity',
            pricing: 'freemium',
            url: 'https://monday.com',
            logo: 'https://upload.wikimedia.org/wikipedia/commons/4/4e/Monday_logo.svg',
            popular: true,
            new: false
        },
        {
            id: 'basecamp',
            name: 'Basecamp',
            description: 'Outil de gestion de projet simple.',
            category: 'productivity',
            pricing: 'paid',
            url: 'https://basecamp.com',
            logo: 'https://upload.wikimedia.org/wikipedia/commons/4/4e/Basecamp_logo.svg',
            popular: false,
            new: false
        },
        {
            id: 'airtable',
            name: 'Airtable',
            description: 'Base de données en ligne et collaboration.',
            category: 'productivity',
            pricing: 'freemium',
            url: 'https://airtable.com',
            logo: 'https://upload.wikimedia.org/wikipedia/commons/4/4e/Airtable_logo.svg',
            popular: true,
            new: false
        },
        {
            id: 'smartsheet',
            name: 'Smartsheet',
            description: 'Plateforme de gestion de travail et automatisation.',
            category: 'productivity',
            pricing: 'freemium',
            url: 'https://smartsheet.com',
            logo: 'https://upload.wikimedia.org/wikipedia/commons/4/4e/Smartsheet_logo.svg',
            popular: true,
            new: false
        },
        {
            id: 'notion-calendar',
            name: 'Notion Calendar',
            description: 'Calendrier intégré à Notion.',
            category: 'productivity',
            pricing: 'free',
            url: 'https://notion.so/calendar',
            logo: 'https://upload.wikimedia.org/wikipedia/commons/4/4e/Notion_Calendar_logo.svg',
            popular: false,
            new: true
        },
        {
            id: 'calendly',
            name: 'Calendly',
            description: 'Planification de rendez-vous automatique.',
            category: 'productivity',
            pricing: 'freemium',
            url: 'https://calendly.com',
            logo: 'https://upload.wikimedia.org/wikipedia/commons/4/4e/Calendly_logo.svg',
            popular: true,
            new: false
        },
        {
            id: 'doodle',
            name: 'Doodle',
            description: 'Planification de réunions et sondages.',
            category: 'productivity',
            pricing: 'freemium',
            url: 'https://doodle.com',
            logo: 'https://upload.wikimedia.org/wikipedia/commons/4/4e/Doodle_logo.svg',
            popular: false,
            new: false
        },
        {
            id: 'zapier',
            name: 'Zapier',
            description: 'Automatisation entre applications.',
            category: 'productivity',
            pricing: 'freemium',
            url: 'https://zapier.com',
            logo: 'https://upload.wikimedia.org/wikipedia/commons/4/4e/Zapier_logo.svg',
            popular: true,
            new: false
        },
        {
            id: 'ifttt',
            name: 'IFTTT',
            description: 'Automatisation simple entre services.',
            category: 'productivity',
            pricing: 'freemium',
            url: 'https://ifttt.com',
            logo: 'https://upload.wikimedia.org/wikipedia/commons/4/4e/IFTTT_logo.svg',
            popular: false,
            new: false
        },
        
        // Design et Création
        {
            id: 'figma',
            name: 'Figma',
            description: 'Outil de design collaboratif pour interfaces et prototypes.',
            category: 'design',
            pricing: 'freemium',
            url: 'https://www.figma.com',
            logo: 'https://upload.wikimedia.org/wikipedia/commons/3/33/Figma-logo.svg',
            popular: true,
            new: false
        },
        {
            id: 'canva',
            name: 'Canva',
            description: 'Outil de design graphique facile pour tous.',
            category: 'design',
            pricing: 'freemium',
            url: 'https://www.canva.com',
            logo: 'https://upload.wikimedia.org/wikipedia/commons/0/0c/Canva_logo.svg',
            popular: true,
            new: false
        },
        {
            id: 'adobe-creative-cloud',
            name: 'Adobe Creative Cloud',
            description: 'Suite complète d\'outils créatifs Adobe.',
            category: 'design',
            pricing: 'paid',
            url: 'https://www.adobe.com/creativecloud.html',
            logo: 'https://upload.wikimedia.org/wikipedia/commons/8/8d/Adobe_Creative_Cloud_logo_%282019%29.svg',
            popular: true,
            new: false
        },
        {
            id: 'webflow',
            name: 'Webflow',
            description: 'Plateforme de design web sans code.',
            category: 'design',
            pricing: 'freemium',
            url: 'https://webflow.com',
            logo: 'https://upload.wikimedia.org/wikipedia/commons/5/5e/Webflow_logo.svg',
            popular: true,
            new: false
        },
        {
            id: 'framer',
            name: 'Framer',
            description: 'Outil de prototypage et design interactif.',
            category: 'design',
            pricing: 'freemium',
            url: 'https://www.framer.com',
            logo: 'https://upload.wikimedia.org/wikipedia/commons/5/5e/Framer_logo.svg',
            popular: true,
            new: true
        },
        {
            id: 'squarespace',
            name: 'Squarespace',
            description: 'Créateur de sites web.',
            category: 'design',
            pricing: 'paid',
            url: 'https://www.squarespace.com',
            logo: 'https://upload.wikimedia.org/wikipedia/commons/4/4e/Squarespace_logo.svg',
            popular: true,
            new: false
        },
        {
            id: 'wix',
            name: 'Wix',
            description: 'Créateur de sites web.',
            category: 'design',
            pricing: 'freemium',
            url: 'https://www.wix.com',
            logo: 'https://upload.wikimedia.org/wikipedia/commons/4/4e/Wix_logo.svg',
            popular: true,
            new: false
        },
        {
            id: 'adobe-photoshop',
            name: 'Adobe Photoshop',
            description: 'Outil de retouche photo et design.',
            category: 'design',
            pricing: 'paid',
            url: 'https://www.adobe.com/products/photoshop.html',
            logo: 'https://upload.wikimedia.org/wikipedia/commons/4/4e/Adobe_Photoshop_logo.svg',
            popular: true,
            new: false
        },
        {
            id: 'adobe-illustrator',
            name: 'Adobe Illustrator',
            description: 'Outil de design vectoriel.',
            category: 'design',
            pricing: 'paid',
            url: 'https://www.adobe.com/products/illustrator.html',
            logo: 'https://upload.wikimedia.org/wikipedia/commons/4/4e/Adobe_Illustrator_logo.svg',
            popular: true,
            new: false
        },
        {
            id: 'invision',
            name: 'InVision',
            description: 'Plateforme de prototypage et collaboration.',
            category: 'design',
            pricing: 'freemium',
            url: 'https://www.invisionapp.com',
            logo: 'https://upload.wikimedia.org/wikipedia/commons/4/4e/InVision_logo.svg',
            popular: false,
            new: false
        },
        {
            id: 'adobe-xd',
            name: 'Adobe XD',
            description: 'Outil de design UI/UX.',
            category: 'design',
            pricing: 'freemium',
            url: 'https://www.adobe.com/products/xd.html',
            logo: 'https://upload.wikimedia.org/wikipedia/commons/4/4e/Adobe_XD_logo.svg',
            popular: false,
            new: false
        },
        {
            id: 'sketch',
            name: 'Sketch',
            description: 'Outil de design d\'interface pour Mac.',
            category: 'design',
            pricing: 'paid',
            url: 'https://www.sketch.com',
            logo: 'https://upload.wikimedia.org/wikipedia/commons/5/5e/Sketch_logo.svg',
            popular: false,
            new: false
        },
        {
            id: 'figjam',
            name: 'FigJam',
            description: 'Outil de collaboration en ligne.',
            category: 'design',
            pricing: 'freemium',
            url: 'https://www.figma.com/figjam',
            logo: 'https://upload.wikimedia.org/wikipedia/commons/4/4e/FigJam_logo.svg',
            popular: true,
            new: true
        },
        {
            id: 'miro',
            name: 'Miro',
            description: 'Tableau blanc collaboratif en ligne.',
            category: 'design',
            pricing: 'freemium',
            url: 'https://miro.com',
            logo: 'https://upload.wikimedia.org/wikipedia/commons/4/4e/Miro_logo.svg',
            popular: true,
            new: false
        },
        {
            id: 'lucidchart',
            name: 'Lucidchart',
            description: 'Outil de diagrammes et flowcharts.',
            category: 'design',
            pricing: 'freemium',
            url: 'https://www.lucidchart.com',
            logo: 'https://upload.wikimedia.org/wikipedia/commons/4/4e/Lucidchart_logo.svg',
            popular: true,
            new: false
        },
        {
            id: 'gimp',
            name: 'GIMP',
            description: 'Éditeur d\'images open source.',
            category: 'design',
            pricing: 'free',
            url: 'https://www.gimp.org',
            logo: 'https://upload.wikimedia.org/wikipedia/commons/4/4e/GIMP_logo.svg',
            popular: false,
            new: false
        },
        
        // Développement
        {
            id: 'github',
            name: 'GitHub',
            description: 'Plateforme de développement et hébergement de code.',
            category: 'development',
            pricing: 'freemium',
            url: 'https://github.com',
            logo: 'https://upload.wikimedia.org/wikipedia/commons/9/91/Octicons-mark-github.svg',
            popular: true,
            new: false
        },
        {
            id: 'gitlab',
            name: 'GitLab',
            description: 'Plateforme DevOps complète pour le cycle de vie du développement.',
            category: 'development',
            pricing: 'freemium',
            url: 'https://gitlab.com',
            logo: 'https://upload.wikimedia.org/wikipedia/commons/1/18/GitLab_Logo.svg',
            popular: true,
            new: false
        },
        {
            id: 'vscode',
            name: 'Visual Studio Code',
            description: 'Éditeur de code léger et puissant de Microsoft.',
            category: 'development',
            pricing: 'free',
            url: 'https://code.visualstudio.com',
            logo: 'https://upload.wikimedia.org/wikipedia/commons/9/9a/Visual_Studio_Code_1.35_icon.svg',
            popular: true,
            new: false
        },
        {
            id: 'vercel',
            name: 'Vercel',
            description: 'Plateforme de déploiement pour applications web.',
            category: 'development',
            pricing: 'freemium',
            url: 'https://vercel.com',
            logo: 'https://upload.wikimedia.org/wikipedia/commons/f/f8/Vercel_logo.svg',
            popular: true,
            new: true
        },
        {
            id: 'docker',
            name: 'Docker',
            description: 'Plateforme de conteneurisation d\'applications.',
            category: 'development',
            pricing: 'free',
            url: 'https://www.docker.com',
            logo: 'https://upload.wikimedia.org/wikipedia/commons/4/4e/Docker_%28container_engine%29_logo.svg',
            popular: true,
            new: false
        },
        {
            id: 'aws',
            name: 'AWS',
            description: 'Services cloud d\'Amazon.',
            category: 'development',
            pricing: 'freemium',
            url: 'https://aws.amazon.com',
            logo: 'https://upload.wikimedia.org/wikipedia/commons/9/93/Amazon_Web_Services_Logo.svg',
            popular: true,
            new: false
        },
        {
            id: 'google-cloud',
            name: 'Google Cloud',
            description: 'Services cloud de Google.',
            category: 'development',
            pricing: 'freemium',
            url: 'https://cloud.google.com',
            logo: 'https://upload.wikimedia.org/wikipedia/commons/5/51/Google_Cloud_logo.svg',
            popular: true,
            new: false
        },
        {
            id: 'azure',
            name: 'Microsoft Azure',
            description: 'Services cloud de Microsoft.',
            category: 'development',
            pricing: 'freemium',
            url: 'https://azure.microsoft.com',
            logo: 'https://upload.wikimedia.org/wikipedia/commons/4/4e/Microsoft_Azure_logo.svg',
            popular: true,
            new: false
        },
        {
            id: 'netlify',
            name: 'Netlify',
            description: 'Plateforme de déploiement pour sites web.',
            category: 'development',
            pricing: 'freemium',
            url: 'https://www.netlify.com',
            logo: 'https://upload.wikimedia.org/wikipedia/commons/4/4e/Netlify_logo.svg',
            popular: true,
            new: false
        },
        {
            id: 'postman',
            name: 'Postman',
            description: 'Outil de test d\'API.',
            category: 'development',
            pricing: 'freemium',
            url: 'https://www.postman.com',
            logo: 'https://upload.wikimedia.org/wikipedia/commons/4/4e/Postman_logo.svg',
            popular: true,
            new: false
        },
        {
            id: 'bitbucket',
            name: 'Bitbucket',
            description: 'Plateforme de gestion de code.',
            category: 'development',
            pricing: 'freemium',
            url: 'https://bitbucket.org',
            logo: 'https://upload.wikimedia.org/wikipedia/commons/4/4e/Bitbucket_logo.svg',
            popular: false,
            new: false
        },
        {
            id: 'circleci',
            name: 'CircleCI',
            description: 'Plateforme d\'intégration continue.',
            category: 'development',
            pricing: 'freemium',
            url: 'https://circleci.com',
            logo: 'https://upload.wikimedia.org/wikipedia/commons/4/4e/CircleCI_logo.svg',
            popular: true,
            new: false
        },
        {
            id: 'travisci',
            name: 'Travis CI',
            description: 'Service d\'intégration continue.',
            category: 'development',
            pricing: 'freemium',
            url: 'https://travis-ci.org',
            logo: 'https://upload.wikimedia.org/wikipedia/commons/4/4e/Travis_CI_logo.svg',
            popular: false,
            new: false
        },
        {
            id: 'jenkins',
            name: 'Jenkins',
            description: 'Serveur d\'intégration continue open source.',
            category: 'development',
            pricing: 'free',
            url: 'https://jenkins.io',
            logo: 'https://upload.wikimedia.org/wikipedia/commons/4/4e/Jenkins_logo.svg',
            popular: true,
            new: false
        },
        {
            id: 'kubernetes',
            name: 'Kubernetes',
            description: 'Système d\'orchestration de conteneurs.',
            category: 'development',
            pricing: 'free',
            url: 'https://kubernetes.io',
            logo: 'https://upload.wikimedia.org/wikipedia/commons/4/4e/Kubernetes_logo.svg',
            popular: true,
            new: false
        },
        {
            id: 'terraform',
            name: 'Terraform',
            description: 'Outil d\'infrastructure as code.',
            category: 'development',
            pricing: 'freemium',
            url: 'https://terraform.io',
            logo: 'https://upload.wikimedia.org/wikipedia/commons/4/4e/Terraform_logo.svg',
            popular: true,
            new: false
        },
        {
            id: 'ansible',
            name: 'Ansible',
            description: 'Outil d\'automatisation IT.',
            category: 'development',
            pricing: 'free',
            url: 'https://ansible.com',
            logo: 'https://upload.wikimedia.org/wikipedia/commons/4/4e/Ansible_logo.svg',
            popular: true,
            new: false
        },
        {
            id: 'heroku',
            name: 'Heroku',
            description: 'Plateforme cloud PaaS.',
            category: 'development',
            pricing: 'freemium',
            url: 'https://heroku.com',
            logo: 'https://upload.wikimedia.org/wikipedia/commons/4/4e/Heroku_logo.svg',
            popular: false,
            new: false
        },
        {
            id: 'render',
            name: 'Render',
            description: 'Plateforme de déploiement cloud.',
            category: 'development',
            pricing: 'freemium',
            url: 'https://render.com',
            logo: 'https://upload.wikimedia.org/wikipedia/commons/4/4e/Render_logo.svg',
            popular: true,
            new: true
        },
        
        // Marketing
        {
            id: 'mailchimp',
            name: 'Mailchimp',
            description: 'Plateforme d\'email marketing et automatisation.',
            category: 'marketing',
            pricing: 'freemium',
            url: 'https://mailchimp.com',
            logo: 'https://upload.wikimedia.org/wikipedia/commons/4/43/Mailchimp_logo.svg',
            popular: true,
            new: false
        },
        {
            id: 'hubspot',
            name: 'HubSpot',
            description: 'Plateforme CRM et marketing inbound.',
            category: 'marketing',
            pricing: 'freemium',
            url: 'https://www.hubspot.com',
            logo: 'https://upload.wikimedia.org/wikipedia/commons/3/3f/HubSpot_logo.svg',
            popular: true,
            new: false
        },
        {
            id: 'google-analytics',
            name: 'Google Analytics',
            description: 'Outil d\'analyse de trafic web gratuit.',
            category: 'marketing',
            pricing: 'free',
            url: 'https://analytics.google.com',
            logo: 'https://upload.wikimedia.org/wikipedia/commons/6/66/Google_Analytics_Logo.svg',
            popular: true,
            new: false
        },
        {
            id: 'semrush',
            name: 'SEMrush',
            description: 'Outil de SEO et marketing digital.',
            category: 'marketing',
            pricing: 'paid',
            url: 'https://www.semrush.com',
            logo: 'https://upload.wikimedia.org/wikipedia/commons/4/4e/SEMrush_logo.svg',
            popular: true,
            new: false
        },
        {
            id: 'ahrefs',
            name: 'Ahrefs',
            description: 'Outil d\'analyse SEO et backlinks.',
            category: 'marketing',
            pricing: 'paid',
            url: 'https://ahrefs.com',
            logo: 'https://upload.wikimedia.org/wikipedia/commons/4/4e/Ahrefs_logo.svg',
            popular: true,
            new: false
        },
        {
            id: 'hotjar',
            name: 'Hotjar',
            description: 'Outil d\'analyse comportementale.',
            category: 'marketing',
            pricing: 'freemium',
            url: 'https://www.hotjar.com',
            logo: 'https://upload.wikimedia.org/wikipedia/commons/4/4e/Hotjar_logo.svg',
            popular: true,
            new: false
        },
        {
            id: 'buffer',
            name: 'Buffer',
            description: 'Outil de gestion des réseaux sociaux.',
            category: 'marketing',
            pricing: 'freemium',
            url: 'https://buffer.com',
            logo: 'https://upload.wikimedia.org/wikipedia/commons/4/4e/Buffer_logo.svg',
            popular: true,
            new: false
        },
        {
            id: 'hootsuite',
            name: 'Hootsuite',
            description: 'Plateforme de gestion des médias sociaux.',
            category: 'marketing',
            pricing: 'freemium',
            url: 'https://hootsuite.com',
            logo: 'https://upload.wikimedia.org/wikipedia/commons/4/4e/Hootsuite_logo.svg',
            popular: true,
            new: false
        },
        {
            id: 'sprout-social',
            name: 'Sprout Social',
            description: 'Logiciel de gestion des médias sociaux.',
            category: 'marketing',
            pricing: 'paid',
            url: 'https://sproutsocial.com',
            logo: 'https://upload.wikimedia.org/wikipedia/commons/4/4e/Sprout_Social_logo.svg',
            popular: false,
            new: false
        },
        {
            id: 'mailchimp',
            name: 'Mailchimp',
            description: 'Plateforme d\'email marketing et automatisation.',
            category: 'marketing',
            pricing: 'freemium',
            url: 'https://mailchimp.com',
            logo: 'https://upload.wikimedia.org/wikipedia/commons/4/43/Mailchimp_logo.svg',
            popular: true,
            new: false
        },
        {
            id: 'sendinblue',
            name: 'Brevo (Sendinblue)',
            description: 'Plateforme d\'email marketing.',
            category: 'marketing',
            pricing: 'freemium',
            url: 'https://brevo.com',
            logo: 'https://upload.wikimedia.org/wikipedia/commons/4/4e/Brevo_logo.svg',
            popular: true,
            new: false
        },
        {
            id: 'activecampaign',
            name: 'ActiveCampaign',
            description: 'Automatisation marketing et CRM.',
            category: 'marketing',
            pricing: 'freemium',
            url: 'https://activecampaign.com',
            logo: 'https://upload.wikimedia.org/wikipedia/commons/4/4e/ActiveCampaign_logo.svg',
            popular: true,
            new: false
        },
        {
            id: 'convertkit',
            name: 'ConvertKit',
            description: 'Email marketing pour créateurs.',
            category: 'marketing',
            pricing: 'freemium',
            url: 'https://convertkit.com',
            logo: 'https://upload.wikimedia.org/wikipedia/commons/4/4e/ConvertKit_logo.svg',
            popular: false,
            new: false
        },
        {
            id: 'moosend',
            name: 'Moosend',
            description: 'Plateforme d\'email marketing.',
            category: 'marketing',
            pricing: 'freemium',
            url: 'https://moosend.com',
            logo: 'https://upload.wikimedia.org/wikipedia/commons/4/4e/Moosend_logo.svg',
            popular: false,
            new: false
        },
        {
            id: 'klaviyo',
            name: 'Klaviyo',
            description: 'Email marketing et automatisation e-commerce.',
            category: 'marketing',
            pricing: 'freemium',
            url: 'https://klaviyo.com',
            logo: 'https://upload.wikimedia.org/wikipedia/commons/4/4e/Klaviyo_logo.svg',
            popular: true,
            new: true
        },
        
        // Communication
        {
            id: 'slack',
            name: 'Slack',
            description: 'Plateforme de communication d\'équipe.',
            category: 'communication',
            pricing: 'freemium',
            url: 'https://slack.com',
            logo: 'https://upload.wikimedia.org/wikipedia/commons/d/d5/Slack_icon_2019.svg',
            popular: true,
            new: false
        },
        {
            id: 'zoom',
            name: 'Zoom',
            description: 'Service de visioconférence et webinaires.',
            category: 'communication',
            pricing: 'freemium',
            url: 'https://zoom.us',
            logo: 'https://upload.wikimedia.org/wikipedia/commons/7/7b/Zoom_logo.svg',
            popular: true,
            new: false
        },
        {
            id: 'discord',
            name: 'Discord',
            description: 'Plateforme de communication pour communautés.',
            category: 'communication',
            pricing: 'free',
            url: 'https://discord.com',
            logo: 'https://upload.wikimedia.org/wikipedia/commons/9/93/Discord_logo.svg',
            popular: true,
            new: false
        },
        {
            id: 'microsoft-teams',
            name: 'Microsoft Teams',
            description: 'Plateforme de collaboration Microsoft.',
            category: 'communication',
            pricing: 'freemium',
            url: 'https://www.microsoft.com/microsoft-teams',
            logo: 'https://upload.wikimedia.org/wikipedia/commons/c/c9/Microsoft_Teams_%28software%29_logo.svg',
            popular: true,
            new: false
        },
        {
            id: 'telegram',
            name: 'Telegram',
            description: 'Application de messagerie cloud.',
            category: 'communication',
            pricing: 'free',
            url: 'https://telegram.org',
            logo: 'https://upload.wikimedia.org/wikipedia/commons/4/4e/Telegram_logo.svg',
            popular: true,
            new: false
        },
        {
            id: 'whatsapp',
            name: 'WhatsApp',
            description: 'Application de messagerie.',
            category: 'communication',
            pricing: 'free',
            url: 'https://www.whatsapp.com',
            logo: 'https://upload.wikimedia.org/wikipedia/commons/4/4e/WhatsApp_logo.svg',
            popular: true,
            new: false
        },
        {
            id: 'google-meet',
            name: 'Google Meet',
            description: 'Service de visioconférence Google.',
            category: 'communication',
            pricing: 'free',
            url: 'https://meet.google.com',
            logo: 'https://upload.wikimedia.org/wikipedia/commons/4/4e/Google_Meet_logo.svg',
            popular: true,
            new: false
        },
        {
            id: 'loom',
            name: 'Loom',
            description: 'Outil d\'enregistrement vidéo.',
            category: 'communication',
            pricing: 'freemium',
            url: 'https://www.loom.com',
            logo: 'https://upload.wikimedia.org/wikipedia/commons/4/4e/Loom_logo.svg',
            popular: true,
            new: false
        },
        {
            id: 'notion',
            name: 'Notion',
            description: 'Espace de travail tout-en-un.',
            category: 'communication',
            pricing: 'freemium',
            url: 'https://www.notion.so',
            logo: 'https://upload.wikimedia.org/wikipedia/commons/4/45/Notion_app_logo.png',
            popular: true,
            new: false
        },
        {
            id: 'confluence',
            name: 'Confluence',
            description: 'Outil de collaboration et documentation.',
            category: 'communication',
            pricing: 'freemium',
            url: 'https://www.atlassian.com/software/confluence',
            logo: 'https://upload.wikimedia.org/wikipedia/commons/4/4e/Confluence_logo.svg',
            popular: true,
            new: false
        },
        {
            id: 'google-workspace',
            name: 'Google Workspace',
            description: 'Suite de productivité Google.',
            category: 'communication',
            pricing: 'freemium',
            url: 'https://workspace.google.com',
            logo: 'https://upload.wikimedia.org/wikipedia/commons/4/4e/Google_Workspace_logo.svg',
            popular: true,
            new: false
        },
        {
            id: 'microsoft-365',
            name: 'Microsoft 365',
            description: 'Suite de productivité Microsoft.',
            category: 'communication',
            pricing: 'paid',
            url: 'https://www.microsoft.com/microsoft-365',
            logo: 'https://upload.wikimedia.org/wikipedia/commons/4/4e/Microsoft_365_logo.svg',
            popular: true,
            new: false
        },
        {
            id: 'dropbox-paper',
            name: 'Dropbox Paper',
            description: 'Outil de collaboration documentaire.',
            category: 'communication',
            pricing: 'free',
            url: 'https://www.dropbox.com/paper',
            logo: 'https://upload.wikimedia.org/wikipedia/commons/4/4e/Dropbox_Paper_logo.svg',
            popular: false,
            new: false
        },
        {
            id: 'coda',
            name: 'Coda',
            description: 'Document tout-en-un.',
            category: 'communication',
            pricing: 'freemium',
            url: 'https://coda.io',
            logo: 'https://upload.wikimedia.org/wikipedia/commons/4/4e/Coda_logo.svg',
            popular: true,
            new: false
        },
        {
            id: 'quillbot',
            name: 'QuillBot',
            description: 'Assistant de rédaction IA.',
            category: 'communication',
            pricing: 'freemium',
            url: 'https://quillbot.com',
            logo: 'https://upload.wikimedia.org/wikipedia/commons/4/4e/QuillBot_logo.svg',
            popular: false,
            new: false
        },
        {
            id: 'grammarly',
            name: 'Grammarly',
            description: 'Assistant d\'écriture et grammaire.',
            category: 'communication',
            pricing: 'freemium',
            url: 'https://grammarly.com',
            logo: 'https://upload.wikimedia.org/wikipedia/commons/4/4e/Grammarly_logo.svg',
            popular: true,
            new: false
        },
        {
            id: 'notion-ai',
            name: 'Notion AI',
            description: 'IA intégrée à Notion.',
            category: 'communication',
            pricing: 'paid',
            url: 'https://www.notion.so/product/ai',
            logo: 'https://upload.wikimedia.org/wikipedia/commons/4/4e/Notion_AI_logo.svg',
            popular: true,
            new: true
        },
        
        // Stockage
        {
            id: 'google-drive',
            name: 'Google Drive',
            description: 'Stockage cloud et collaboration sur documents.',
            category: 'storage',
            pricing: 'freemium',
            url: 'https://drive.google.com',
            logo: 'https://upload.wikimedia.org/wikipedia/commons/1/12/Google_Drive_icon_%282020%29.svg',
            popular: true,
            new: false
        },
        {
            id: 'dropbox',
            name: 'Dropbox',
            description: 'Service de stockage cloud et partage de fichiers.',
            category: 'storage',
            pricing: 'freemium',
            url: 'https://www.dropbox.com',
            logo: 'https://upload.wikimedia.org/wikipedia/commons/7/7e/Dropbox_logo.svg',
            popular: true,
            new: false
        },
        {
            id: 'onedrive',
            name: 'OneDrive',
            description: 'Stockage cloud de Microsoft.',
            category: 'storage',
            pricing: 'freemium',
            url: 'https://onedrive.live.com',
            logo: 'https://upload.wikimedia.org/wikipedia/commons/1/14/Microsoft_OneDrive_logo.svg',
            popular: false,
            new: false
        },
        {
            id: 'box',
            name: 'Box',
            description: 'Plateforme de stockage cloud sécurisée pour entreprises.',
            category: 'storage',
            pricing: 'freemium',
            url: 'https://www.box.com',
            logo: 'https://upload.wikimedia.org/wikipedia/commons/6/63/Box_%28company%29_logo.svg',
            popular: false,
            new: false
        },
        {
            id: 'pcloud',
            name: 'pCloud',
            description: 'Service de stockage cloud sécurisé.',
            category: 'storage',
            pricing: 'freemium',
            url: 'https://pcloud.com',
            logo: 'https://upload.wikimedia.org/wikipedia/commons/4/4e/pCloud_logo.svg',
            popular: false,
            new: false
        },
        {
            id: 'mega',
            name: 'MEGA',
            description: 'Stockage cloud avec chiffrement.',
            category: 'storage',
            pricing: 'freemium',
            url: 'https://mega.nz',
            logo: 'https://upload.wikimedia.org/wikipedia/commons/4/4e/MEGA_logo.svg',
            popular: false,
            new: false
        },
        {
            id: 'sync',
            name: 'Sync.com',
            description: 'Stockage cloud sécurisé et chiffré.',
            category: 'storage',
            pricing: 'freemium',
            url: 'https://sync.com',
            logo: 'https://upload.wikimedia.org/wikipedia/commons/4/4e/Sync_logo.svg',
            popular: false,
            new: false
        },
        {
            id: 'icloud',
            name: 'iCloud',
            description: 'Service de stockage cloud d\'Apple.',
            category: 'storage',
            pricing: 'freemium',
            url: 'https://www.icloud.com',
            logo: 'https://upload.wikimedia.org/wikipedia/commons/4/4e/Apple_iCloud_logo.svg',
            popular: false,
            new: false
        },
        {
            id: 'mediafire',
            name: 'MediaFire',
            description: 'Service de stockage et partage de fichiers.',
            category: 'storage',
            pricing: 'freemium',
            url: 'https://mediafire.com',
            logo: 'https://upload.wikimedia.org/wikipedia/commons/4/4e/MediaFire_logo.svg',
            popular: false,
            new: false
        },
        {
            id: '4shared',
            name: '4shared',
            description: 'Service de stockage et partage de fichiers.',
            category: 'storage',
            pricing: 'freemium',
            url: 'https://4shared.com',
            logo: 'https://upload.wikimedia.org/wikipedia/commons/4/4e/4shared_logo.svg',
            popular: false,
            new: false
        },
        {
            id: 'zoho-workdrive',
            name: 'Zoho WorkDrive',
            description: 'Stockage cloud pour entreprises.',
            category: 'storage',
            pricing: 'freemium',
            url: 'https://zoho.com/workdrive',
            logo: 'https://upload.wikimedia.org/wikipedia/commons/4/4e/Zoho_WorkDrive_logo.svg',
            popular: false,
            new: false
        },
        {
            id: 'egnyte',
            name: 'Egnyte',
            description: 'Plateforme de gestion de fichiers cloud.',
            category: 'storage',
            pricing: 'paid',
            url: 'https://egnyte.com',
            logo: 'https://upload.wikimedia.org/wikipedia/commons/4/4e/Egnyte_logo.svg',
            popular: false,
            new: false
        },
        {
            id: 'wasabi',
            name: 'Wasabi',
            description: 'Stockage cloud object storage.',
            category: 'storage',
            pricing: 'freemium',
            url: 'https://wasabi.com',
            logo: 'https://upload.wikimedia.org/wikipedia/commons/4/4e/Wasabi_logo.svg',
            popular: false,
            new: true
        },
        
        // Gestion de Projets
        {
            id: 'jira',
            name: 'Jira',
            description: 'Outil de gestion de projet et suivi de bugs.',
            category: 'project-management',
            pricing: 'freemium',
            url: 'https://www.atlassian.com/software/jira',
            logo: 'https://upload.wikimedia.org/wikipedia/commons/8/87/Jira_logo.svg',
            popular: true,
            new: false
        },
        {
            id: 'confluence',
            name: 'Confluence',
            description: 'Outil de collaboration et documentation.',
            category: 'project-management',
            pricing: 'freemium',
            url: 'https://www.atlassian.com/software/confluence',
            logo: 'https://upload.wikimedia.org/wikipedia/commons/4/4e/Confluence_logo.svg',
            popular: true,
            new: false
        },
        {
            id: 'trello',
            name: 'Trello',
            description: 'Gestion de projet avec tableaux Kanban.',
            category: 'project-management',
            pricing: 'freemium',
            url: 'https://trello.com',
            logo: 'https://upload.wikimedia.org/wikipedia/commons/7/7a/Trello_logo-blue.svg',
            popular: true,
            new: false
        },
        {
            id: 'asana',
            name: 'Asana',
            description: 'Gestion de projet et collaboration d\'équipe.',
            category: 'project-management',
            pricing: 'freemium',
            url: 'https://asana.com',
            logo: 'https://upload.wikimedia.org/wikipedia/commons/4/46/Asana_logo.svg',
            popular: true,
            new: false
        },
        {
            id: 'monday',
            name: 'Monday.com',
            description: 'Plateforme de gestion de travail.',
            category: 'project-management',
            pricing: 'freemium',
            url: 'https://monday.com',
            logo: 'https://upload.wikimedia.org/wikipedia/commons/4/4e/Monday_logo.svg',
            popular: true,
            new: false
        },
        {
            id: 'clickup',
            name: 'ClickUp',
            description: 'Plateforme de gestion de projet tout-en-un.',
            category: 'project-management',
            pricing: 'freemium',
            url: 'https://clickup.com',
            logo: 'https://upload.wikimedia.org/wikipedia/commons/1/1c/ClickUp_logo.svg',
            popular: true,
            new: true
        },
        {
            id: 'basecamp',
            name: 'Basecamp',
            description: 'Outil de gestion de projet simple.',
            category: 'project-management',
            pricing: 'paid',
            url: 'https://basecamp.com',
            logo: 'https://upload.wikimedia.org/wikipedia/commons/4/4e/Basecamp_logo.svg',
            popular: false,
            new: false
        },
        {
            id: 'smartsheet',
            name: 'Smartsheet',
            description: 'Plateforme de gestion de travail.',
            category: 'project-management',
            pricing: 'freemium',
            url: 'https://smartsheet.com',
            logo: 'https://upload.wikimedia.org/wikipedia/commons/4/4e/Smartsheet_logo.svg',
            popular: true,
            new: false
        },
        {
            id: 'wrike',
            name: 'Wrike',
            description: 'Outil de gestion de projet et collaboration.',
            category: 'project-management',
            pricing: 'freemium',
            url: 'https://wrike.com',
            logo: 'https://upload.wikimedia.org/wikipedia/commons/4/4e/Wrike_logo.svg',
            popular: false,
            new: false
        },
        {
            id: 'teamwork',
            name: 'Teamwork',
            description: 'Outil de gestion de projet.',
            category: 'project-management',
            pricing: 'freemium',
            url: 'https://teamwork.com',
            logo: 'https://upload.wikimedia.org/wikipedia/commons/4/4e/Teamwork_logo.svg',
            popular: false,
            new: false
        },
        
        // Business
        {
            id: 'salesforce',
            name: 'Salesforce',
            description: 'Plateforme CRM pour entreprises.',
            category: 'business',
            pricing: 'freemium',
            url: 'https://salesforce.com',
            logo: 'https://upload.wikimedia.org/wikipedia/commons/4/4e/Salesforce_logo.svg',
            popular: true,
            new: false
        },
        {
            id: 'hubspot',
            name: 'HubSpot',
            description: 'CRM et marketing inbound.',
            category: 'business',
            pricing: 'freemium',
            url: 'https://hubspot.com',
            logo: 'https://upload.wikimedia.org/wikipedia/commons/3/3f/HubSpot_logo.svg',
            popular: true,
            new: false
        },
        {
            id: 'zoho',
            name: 'Zoho',
            description: 'Suite d\'applications business.',
            category: 'business',
            pricing: 'freemium',
            url: 'https://zoho.com',
            logo: 'https://upload.wikimedia.org/wikipedia/commons/4/4e/Zoho_logo.svg',
            popular: true,
            new: false
        },
        {
            id: 'pipedrive',
            name: 'Pipedrive',
            description: 'CRM pour ventes et gestion de clients.',
            category: 'business',
            pricing: 'freemium',
            url: 'https://pipedrive.com',
            logo: 'https://upload.wikimedia.org/wikipedia/commons/4/4e/Pipedrive_logo.svg',
            popular: true,
            new: false
        },
        {
            id: 'freshworks',
            name: 'Freshworks',
            description: 'Suite CRM et support client.',
            category: 'business',
            pricing: 'freemium',
            url: 'https://freshworks.com',
            logo: 'https://upload.wikimedia.org/wikipedia/commons/4/4e/Freshworks_logo.svg',
            popular: true,
            new: false
        },
        {
            id: 'zendesk',
            name: 'Zendesk',
            description: 'Plateforme de support client.',
            category: 'business',
            pricing: 'freemium',
            url: 'https://zendesk.com',
            logo: 'https://upload.wikimedia.org/wikipedia/commons/4/4e/Zendesk_logo.svg',
            popular: true,
            new: false
        },
        {
            id: 'intercom',
            name: 'Intercom',
            description: 'Plateforme de messagerie et support.',
            category: 'business',
            pricing: 'freemium',
            url: 'https://intercom.com',
            logo: 'https://upload.wikimedia.org/wikipedia/commons/4/4e/Intercom_logo.svg',
            popular: true,
            new: false
        },
        {
            id: 'drift',
            name: 'Drift',
            description: 'Plateforme de conversation et marketing.',
            category: 'business',
            pricing: 'freemium',
            url: 'https://drift.com',
            logo: 'https://upload.wikimedia.org/wikipedia/commons/4/4e/Drift_logo.svg',
            popular: false,
            new: false
        },
        {
            id: 'insightly',
            name: 'Insightly',
            description: 'CRM pour petites entreprises.',
            category: 'business',
            pricing: 'freemium',
            url: 'https://insightly.com',
            logo: 'https://upload.wikimedia.org/wikipedia/commons/4/4e/Insightly_logo.svg',
            popular: false,
            new: false
        },
        {
            id: 'nutshell',
            name: 'Nutshell',
            description: 'CRM pour petites entreprises.',
            category: 'business',
            pricing: 'freemium',
            url: 'https://nutshell.com',
            logo: 'https://upload.wikimedia.org/wikipedia/commons/4/4e/Nutshell_logo.svg',
            popular: false,
            new: false
        },
        
        // Finance
        {
            id: 'quickbooks',
            name: 'QuickBooks',
            description: 'Logiciel de comptabilité pour petites entreprises.',
            category: 'finance',
            pricing: 'freemium',
            url: 'https://quickbooks.intuit.com',
            logo: 'https://upload.wikimedia.org/wikipedia/commons/4/4e/QuickBooks_logo.svg',
            popular: true,
            new: false
        },
        {
            id: 'xero',
            name: 'Xero',
            description: 'Logiciel de comptabilité cloud.',
            category: 'finance',
            pricing: 'freemium',
            url: 'https://xero.com',
            logo: 'https://upload.wikimedia.org/wikipedia/commons/4/4e/Xero_logo.svg',
            popular: true,
            new: false
        },
        {
            id: 'freshbooks',
            name: 'FreshBooks',
            description: 'Logiciel de facturation et comptabilité.',
            category: 'finance',
            pricing: 'freemium',
            url: 'https://freshbooks.com',
            logo: 'https://upload.wikimedia.org/wikipedia/commons/4/4e/FreshBooks_logo.svg',
            popular: true,
            new: false
        },
        {
            id: 'wave',
            name: 'Wave',
            description: 'Logiciel de comptabilité gratuit.',
            category: 'finance',
            pricing: 'free',
            url: 'https://waveapps.com',
            logo: 'https://upload.wikimedia.org/wikipedia/commons/4/4e/Wave_logo.svg',
            popular: false,
            new: false
        },
        {
            id: 'stripe',
            name: 'Stripe',
            description: 'Traitement de paiements en ligne.',
            category: 'finance',
            pricing: 'freemium',
            url: 'https://stripe.com',
            logo: 'https://upload.wikimedia.org/wikipedia/commons/4/4e/Stripe_logo.svg',
            popular: true,
            new: false
        },
        {
            id: 'paypal',
            name: 'PayPal',
            description: 'Service de paiement en ligne.',
            category: 'finance',
            pricing: 'freemium',
            url: 'https://paypal.com',
            logo: 'https://upload.wikimedia.org/wikipedia/commons/4/4e/PayPal_logo.svg',
            popular: true,
            new: false
        },
        {
            id: 'wise',
            name: 'Wise',
            description: 'Transferts d\'argent internationaux.',
            category: 'finance',
            pricing: 'freemium',
            url: 'https://wise.com',
            logo: 'https://upload.wikimedia.org/wikipedia/commons/4/4e/Wise_logo.svg',
            popular: true,
            new: false
        },
        {
            id: 'revolut',
            name: 'Revolut',
            description: 'Banque mobile et service financier.',
            category: 'finance',
            pricing: 'freemium',
            url: 'https://www.revolut.com',
            logo: 'https://upload.wikimedia.org/wikipedia/commons/4/4e/Revolut_logo.svg',
            popular: false,
            new: false
        },
        {
            id: 'expensify',
            name: 'Expensify',
            description: 'Gestion des notes de frais.',
            category: 'finance',
            pricing: 'freemium',
            url: 'https://expensify.com',
            logo: 'https://upload.wikimedia.org/wikipedia/commons/4/4e/Expensify_logo.svg',
            popular: false,
            new: false
        },
        {
            id: 'square',
            name: 'Square',
            description: 'Paiements et solutions commerciales.',
            category: 'finance',
            pricing: 'freemium',
            url: 'https://squareup.com',
            logo: 'https://upload.wikimedia.org/wikipedia/commons/4/4e/Square_logo.svg',
            popular: true,
            new: false
        },
        
        // Automatisation
        {
            id: 'zapier',
            name: 'Zapier',
            description: 'Automatisation entre applications.',
            category: 'automation',
            pricing: 'freemium',
            url: 'https://zapier.com',
            logo: 'https://upload.wikimedia.org/wikipedia/commons/4/4e/Zapier_logo.svg',
            popular: true,
            new: false
        },
        {
            id: 'ifttt',
            name: 'IFTTT',
            description: 'Automatisation simple entre services.',
            category: 'automation',
            pricing: 'freemium',
            url: 'https://ifttt.com',
            logo: 'https://upload.wikimedia.org/wikipedia/commons/4/4e/IFTTT_logo.svg',
            popular: false,
            new: false
        },
        {
            id: 'integromat',
            name: 'Make (Integromat)',
            description: 'Plateforme d\'automatisation visuelle.',
            category: 'automation',
            pricing: 'freemium',
            url: 'https://make.com',
            logo: 'https://upload.wikimedia.org/wikipedia/commons/4/4e/Make_logo.svg',
            popular: true,
            new: false
        },
        {
            id: 'n8n',
            name: 'n8n',
            description: 'Automatisation workflow open source.',
            category: 'automation',
            pricing: 'freemium',
            url: 'https://n8n.io',
            logo: 'https://upload.wikimedia.org/wikipedia/commons/4/4e/n8n_logo.svg',
            popular: true,
            new: true
        },
        {
            id: 'automate-io',
            name: 'Automate.io',
            description: 'Automatisation d\'intégration d\'applications.',
            category: 'automation',
            pricing: 'freemium',
            url: 'https://automate.io',
            logo: 'https://upload.wikimedia.org/wikipedia/commons/4/4e/Automate_io_logo.svg',
            popular: false,
            new: false
        },
        {
            id: 'workato',
            name: 'Workato',
            description: 'Automatisation d\'entreprise.',
            category: 'automation',
            pricing: 'freemium',
            url: 'https://workato.com',
            logo: 'https://upload.wikimedia.org/wikipedia/commons/4/4e/Workato_logo.svg',
            popular: false,
            new: false
        },
        {
            id: 'tray-io',
            name: 'Tray.io',
            description: 'Plateforme d\'automatisation d\'API.',
            category: 'automation',
            pricing: 'freemium',
            url: 'https://tray.io',
            logo: 'https://upload.wikimedia.org/wikipedia/commons/4/4e/Tray_io_logo.svg',
            popular: false,
            new: false
        },
        {
            id: 'pipedream',
            name: 'Pipedream',
            description: 'Plateforme d\'intégration pour développeurs.',
            category: 'automation',
            pricing: 'freemium',
            url: 'https://pipedream.com',
            logo: 'https://upload.wikimedia.org/wikipedia/commons/4/4e/Pipedream_logo.svg',
            popular: true,
            new: true
        },
        {
            id: 'parabola',
            name: 'Parabola',
            description: 'Automatisation de workflows visuels.',
            category: 'automation',
            pricing: 'freemium',
            url: 'https://parabola.io',
            logo: 'https://upload.wikimedia.org/wikipedia/commons/4/4e/Parabola_logo.svg',
            popular: false,
            new: false
        },
        {
            id: 'airbyte',
            name: 'Airbyte',
            description: 'Plateforme d\'intégration de données.',
            category: 'automation',
            pricing: 'freemium',
            url: 'https://airbyte.com',
            logo: 'https://upload.wikimedia.org/wikipedia/commons/4/4e/Airbyte_logo.svg',
            popular: true,
            new: true
        },
        
        // Analytics
        {
            id: 'google-analytics',
            name: 'Google Analytics',
            description: 'Analyse de trafic web.',
            category: 'analytics',
            pricing: 'free',
            url: 'https://analytics.google.com',
            logo: 'https://upload.wikimedia.org/wikipedia/commons/6/66/Google_Analytics_Logo.svg',
            popular: true,
            new: false
        },
        {
            id: 'mixpanel',
            name: 'Mixpanel',
            description: 'Analytique de produits.',
            category: 'analytics',
            pricing: 'freemium',
            url: 'https://mixpanel.com',
            logo: 'https://upload.wikimedia.org/wikipedia/commons/4/4e/Mixpanel_logo.svg',
            popular: true,
            new: false
        },
        {
            id: 'amplitude',
            name: 'Amplitude',
            description: 'Analytique de produits et comportement utilisateur.',
            category: 'analytics',
            pricing: 'freemium',
            url: 'https://amplitude.com',
            logo: 'https://upload.wikimedia.org/wikipedia/commons/4/4e/Amplitude_logo.svg',
            popular: true,
            new: false
        },
        {
            id: 'tableau',
            name: 'Tableau',
            description: 'Visualisation de données et business intelligence.',
            category: 'analytics',
            pricing: 'freemium',
            url: 'https://tableau.com',
            logo: 'https://upload.wikimedia.org/wikipedia/commons/4/4e/Tableau_logo.svg',
            popular: true,
            new: false
        },
        {
            id: 'looker',
            name: 'Looker',
            description: 'Plateforme de business intelligence.',
            category: 'analytics',
            pricing: 'freemium',
            url: 'https://looker.com',
            logo: 'https://upload.wikimedia.org/wikipedia/commons/4/4e/Looker_logo.svg',
            popular: true,
            new: false
        },
        {
            id: 'power-bi',
            name: 'Microsoft Power BI',
            description: 'Outil de visualisation de données Microsoft.',
            category: 'analytics',
            pricing: 'freemium',
            url: 'https://powerbi.microsoft.com',
            logo: 'https://upload.wikimedia.org/wikipedia/commons/4/4e/Power_BI_logo.svg',
            popular: true,
            new: false
        },
        {
            id: 'kissmetrics',
            name: 'Kissmetrics',
            description: 'Analytique web et marketing.',
            category: 'analytics',
            pricing: 'paid',
            url: 'https://kissmetrics.com',
            logo: 'https://upload.wikimedia.org/wikipedia/commons/4/4e/Kissmetrics_logo.svg',
            popular: false,
            new: false
        },
        {
            id: 'heap',
            name: 'Heap',
            description: 'Analytique de produits sans code.',
            category: 'analytics',
            pricing: 'freemium',
            url: 'https://heapanalytics.com',
            logo: 'https://upload.wikimedia.org/wikipedia/commons/4/4e/Heap_logo.svg',
            popular: false,
            new: false
        },
        {
            id: 'fullstory',
            name: 'FullStory',
            description: 'Analytique de comportement utilisateur.',
            category: 'analytics',
            pricing: 'freemium',
            url: 'https://fullstory.com',
            logo: 'https://upload.wikimedia.org/wikipedia/commons/4/4e/FullStory_logo.svg',
            popular: true,
            new: false
        },
        {
            id: 'plausible',
            name: 'Plausible',
            description: 'Analytique web respectueuse de la vie privée.',
            category: 'analytics',
            pricing: 'freemium',
            url: 'https://plausible.io',
            logo: 'https://upload.wikimedia.org/wikipedia/commons/4/4e/Plausible_logo.svg',
            popular: true,
            new: true
        }
    ]
};

// Fonctions utilitaires pour le catalogue
const CatalogUtils = {
    getByCategory: (categoryId) => TOOLS_CATALOG.tools.filter(tool => tool.category === categoryId),
    getPopular: () => TOOLS_CATALOG.tools.filter(tool => tool.popular),
    getNew: () => TOOLS_CATALOG.tools.filter(tool => tool.new),
    search: (query) => {
        const lowerQuery = query.toLowerCase();
        return TOOLS_CATALOG.tools.filter(tool => 
            tool.name.toLowerCase().includes(lowerQuery) ||
            tool.description.toLowerCase().includes(lowerQuery)
        );
    },
    getByPricing: (pricingType) => TOOLS_CATALOG.tools.filter(tool => tool.pricing === pricingType),
    getById: (id) => TOOLS_CATALOG.tools.find(tool => tool.id === id)
};
        {
            id: 'jasper',
            name: 'Jasper',
            description: 'IA pour la création de contenu marketing.',
            category: 'ai',
            pricing: 'paid',
            url: 'https://www.jasper.ai',
            logo: 'https://upload.wikimedia.org/wikipedia/commons/3/3e/Jasper_AI_logo.svg',
            popular: false,
            new: false
        },
        {
            id: 'copy-ai',
            name: 'Copy.ai',
            description: 'IA pour la rédaction de texte marketing.',
            category: 'ai',
            pricing: 'freemium',
            url: 'https://copy.ai',
            logo: 'https://upload.wikimedia.org/wikipedia/commons/4/4e/Copy.ai_logo.svg',
            popular: false,
            new: false
        },
        {
            id: 'writesonic',
            name: 'Writesonic',
            description: 'IA pour la génération de contenu.',
            category: 'ai',
            pricing: 'freemium',
            url: 'https://writesonic.com',
            logo: 'https://upload.wikimedia.org/wikipedia/commons/5/5e/Writesonic_logo.svg',
            popular: false,
            new: false
        },
        
        // Productivité supplémentaires
        {
            id: 'obsidian',
            name: 'Obsidian',
            description: 'Application de prise de notes basée sur Markdown.',
            category: 'productivity',
            pricing: 'free',
            url: 'https://obsidian.md',
            logo: 'https://upload.wikimedia.org/wikipedia/commons/6/6f/Obsidian_logo.svg',
            popular: true,
            new: false
        },
        {
            id: 'roam-research',
            name: 'Roam Research',
            description: 'Outil de prise de notes connectées.',
            category: 'productivity',
            pricing: 'freemium',
            url: 'https://roamresearch.com',
            logo: 'https://upload.wikimedia.org/wikipedia/commons/5/5f/Roam_Research_logo.svg',
            popular: false,
            new: false
        },
        {
            id: 'logseq',
            name: 'Logseq',
            description: 'Outil de prise de notes open-source.',
            category: 'productivity',
            pricing: 'free',
            url: 'https://logseq.com',
            logo: 'https://upload.wikimedia.org/wikipedia/commons/4/4e/Logseq_logo.svg',
            popular: false,
            new: true
        },
        {
            id: 'clickup-2',
            name: 'ClickUp',
            description: 'Plateforme de productivité tout-en-un.',
            category: 'productivity',
            pricing: 'freemium',
            url: 'https://clickup.com',
            logo: 'https://upload.wikimedia.org/wikipedia/commons/1/1c/ClickUp_logo.svg',
            popular: true,
            new: false
        },
        {
            id: 'notion-2',
            name: 'Notion',
            description: 'Espace de travail tout-en-un.',
            category: 'productivity',
            pricing: 'freemium',
            url: 'https://www.notion.so',
            logo: 'https://upload.wikimedia.org/wikipedia/commons/4/45/Notion_app_logo.png',
            popular: true,
            new: false
        },
        {
            id: 'coda',
            name: 'Coda',
            description: 'Document tout-en-un avec intégrations.',
            category: 'productivity',
            pricing: 'freemium',
            url: 'https://coda.io',
            logo: 'https://upload.wikimedia.org/wikipedia/commons/3/3e/Coda_logo.svg',
            popular: false,
            new: false
        },
        {
            id: 'airtable',
            name: 'Airtable',
            description: 'Base de données collaborative en ligne.',
            category: 'productivity',
            pricing: 'freemium',
            url: 'https://airtable.com',
            logo: 'https://upload.wikimedia.org/wikipedia/commons/7/7a/Airtable_logo.svg',
            popular: true,
            new: false
        },
        {
            id: 'monday-2',
            name: 'Monday.com',
            description: 'Plateforme de gestion de travail.',
            category: 'productivity',
            pricing: 'freemium',
            url: 'https://monday.com',
            logo: 'https://upload.wikimedia.org/wikipedia/commons/2/28/Monday.com_logo.svg',
            popular: true,
            new: false
        },
        {
            id: 'smartsheet',
            name: 'Smartsheet',
            description: 'Plateforme de gestion de travail et collaboration.',
            category: 'productivity',
            pricing: 'freemium',
            url: 'https://www.smartsheet.com',
            logo: 'https://upload.wikimedia.org/wikipedia/commons/4/4e/Smartsheet_logo.svg',
            popular: false,
            new: false
        },
        {
            id: 'wrike',
            name: 'Wrike',
            description: 'Logiciel de gestion de projet.',
            category: 'productivity',
            pricing: 'freemium',
            url: 'https://www.wrike.com',
            logo: 'https://upload.wikimedia.org/wikipedia/commons/3/3e/Wrike_logo.svg',
            popular: false,
            new: false
        },
        
        // Design supplémentaires
        {
            id: 'adobe-photoshop',
            name: 'Adobe Photoshop',
            description: 'Logiciel d\'édition d\'images professionnel.',
            category: 'design',
            pricing: 'paid',
            url: 'https://www.adobe.com/products/photoshop',
            logo: 'https://upload.wikimedia.org/wikipedia/commons/a/ab/Adobe_Photoshop_CC_icon.svg',
            popular: true,
            new: false
        },
        {
            id: 'adobe-illustrator',
            name: 'Adobe Illustrator',
            description: 'Logiciel de design vectoriel.',
            category: 'design',
            pricing: 'paid',
            url: 'https://www.adobe.com/products/illustrator',
            logo: 'https://upload.wikimedia.org/wikipedia/commons/f/fb/Adobe_Illustrator_CC_icon.svg',
            popular: true,
            new: false
        },
        {
            id: 'adobe-xd',
            name: 'Adobe XD',
            description: 'Outil de design d\'expérience utilisateur.',
            category: 'design',
            pricing: 'free',
            url: 'https://www.adobe.com/products/xd',
            logo: 'https://upload.wikimedia.org/wikipedia/commons/3/3e/Adobe_XD_CC_icon.svg',
            popular: false,
            new: false
        },
        {
            id: 'invision',
            name: 'InVision',
            description: 'Plateforme de prototypage et collaboration.',
            category: 'design',
            pricing: 'freemium',
            url: 'https://www.invisionapp.com',
            logo: 'https://upload.wikimedia.org/wikipedia/commons/3/3e/InVision_logo.svg',
            popular: false,
            new: false
        },
        {
            id: 'zeplin',
            name: 'Zeplin',
            description: 'Outil de collaboration design-développement.',
            category: 'design',
            pricing: 'freemium',
            url: 'https://zeplin.io',
            logo: 'https://upload.wikimedia.org/wikipedia/commons/6/6f/Zeplin_logo.svg',
            popular: false,
            new: false
        },
        {
            id: 'framer',
            name: 'Framer',
            description: 'Outil de prototypage et design interactif.',
            category: 'design',
            pricing: 'freemium',
            url: 'https://www.framer.com',
            logo: 'https://upload.wikimedia.org/wikipedia/commons/5/5e/Framer_logo.svg',
            popular: true,
            new: true
        },
        {
            id: 'webflow',
            name: 'Webflow',
            description: 'Plateforme de design web sans code.',
            category: 'design',
            pricing: 'freemium',
            url: 'https://webflow.com',
            logo: 'https://upload.wikimedia.org/wikipedia/commons/5/5e/Webflow_logo.svg',
            popular: true,
            new: false
        },
        {
            id: 'affinity-designer',
            name: 'Affinity Designer',
            description: 'Logiciel de design vectoriel abordable.',
            category: 'design',
            pricing: 'paid',
            url: 'https://affinity.serif.com/designer',
            logo: 'https://upload.wikimedia.org/wikipedia/commons/5/5e/Affinity_Designer_logo.svg',
            popular: false,
            new: false
        },
        {
            id: 'gimp',
            name: 'GIMP',
            description: 'Éditeur d\'images open-source gratuit.',
            category: 'design',
            pricing: 'free',
            url: 'https://www.gimp.org',
            logo: 'https://upload.wikimedia.org/wikipedia/commons/4/4e/GIMP_logo.svg',
            popular: false,
            new: false
        },
        {
            id: 'inkscape',
            name: 'Inkscape',
            description: 'Éditeur de graphismes vectoriels open-source.',
            category: 'design',
            pricing: 'free',
            url: 'https://inkscape.org',
            logo: 'https://upload.wikimedia.org/wikipedia/commons/4/4e/Inkscape_logo.svg',
            popular: false,
            new: false
        },
        {
            id: 'blender',
            name: 'Blender',
            description: 'Logiciel 3D open-source.',
            category: 'design',
            pricing: 'free',
            url: 'https://www.blender.org',
            logo: 'https://upload.wikimedia.org/wikipedia/commons/4/4e/Blender_logo.svg',
            popular: false,
            new: false
        },
        
        // Développement supplémentaires
        {
            id: 'bitbucket',
            name: 'Bitbucket',
            description: 'Hébergement de code Git d\'Atlassian.',
            category: 'development',
            pricing: 'freemium',
            url: 'https://bitbucket.org',
            logo: 'https://upload.wikimedia.org/wikipedia/commons/4/4e/Bitbucket_logo.svg',
            popular: false,
            new: false
        },
        {
            id: 'codepen',
            name: 'CodePen',
            description: 'Environnement de développement social.',
            category: 'development',
            pricing: 'freemium',
            url: 'https://codepen.io',
            logo: 'https://upload.wikimedia.org/wikipedia/commons/4/4e/CodePen_logo.svg',
            popular: true,
            new: false
        },
        {
            id: 'jsfiddle',
            name: 'JSFiddle',
            description: 'Éditeur de code en ligne pour JavaScript.',
            category: 'development',
            pricing: 'free',
            url: 'https://jsfiddle.net',
            logo: 'https://upload.wikimedia.org/wikipedia/commons/4/4e/JSFiddle_logo.svg',
            popular: false,
            new: false
        },
        {
            id: 'stack-overflow',
            name: 'Stack Overflow',
            description: 'Communité de questions-réponses pour développeurs.',
            category: 'development',
            pricing: 'free',
            url: 'https://stackoverflow.com',
            logo: 'https://upload.wikimedia.org/wikipedia/commons/4/4e/Stack_Overflow_logo.svg',
            popular: true,
            new: false
        },
        {
            id: 'docker',
            name: 'Docker',
            description: 'Plateforme de conteneurisation d\'applications.',
            category: 'development',
            pricing: 'free',
            url: 'https://www.docker.com',
            logo: 'https://upload.wikimedia.org/wikipedia/commons/4/4e/Docker_logo.svg',
            popular: true,
            new: false
        },
        {
            id: 'kubernetes',
            name: 'Kubernetes',
            description: 'Système d\'orchestration de conteneurs.',
            category: 'development',
            pricing: 'free',
            url: 'https://kubernetes.io',
            logo: 'https://upload.wikimedia.org/wikipedia/commons/4/4e/Kubernetes_logo.svg',
            popular: false,
            new: false
        },
        {
            id: 'aws',
            name: 'AWS',
            description: 'Services cloud d\'Amazon.',
            category: 'development',
            pricing: 'freemium',
            url: 'https://aws.amazon.com',
            logo: 'https://upload.wikimedia.org/wikipedia/commons/9/93/Amazon_Web_Services_Logo.svg',
            popular: true,
            new: false
        },
        {
            id: 'google-cloud',
            name: 'Google Cloud',
            description: 'Services cloud de Google.',
            category: 'development',
            pricing: 'freemium',
            url: 'https://cloud.google.com',
            logo: 'https://upload.wikimedia.org/wikipedia/commons/5/51/Google_Cloud_logo.svg',
            popular: true,
            new: false
        },
        {
            id: 'azure',
            name: 'Microsoft Azure',
            description: 'Services cloud de Microsoft.',
            category: 'development',
            pricing: 'freemium',
            url: 'https://azure.microsoft.com',
            logo: 'https://upload.wikimedia.org/wikipedia/commons/4/4e/Microsoft_Azure_logo.svg',
            popular: true,
            new: false
        },
        {
            id: 'heroku',
            name: 'Heroku',
            description: 'Plateforme cloud PaaS.',
            category: 'development',
            pricing: 'freemium',
            url: 'https://www.heroku.com',
            logo: 'https://upload.wikimedia.org/wikipedia/commons/4/4e/Heroku_logo.svg',
            popular: false,
            new: false
        },
        {
            id: 'netlify',
            name: 'Netlify',
            description: 'Plateforme de déploiement pour sites web.',
            category: 'development',
            pricing: 'freemium',
            url: 'https://www.netlify.com',
            logo: 'https://upload.wikimedia.org/wikipedia/commons/4/4e/Netlify_logo.svg',
            popular: true,
            new: false
        },
        {
            id: 'digitalocean',
            name: 'DigitalOcean',
            description: 'Infrastructure cloud simple pour développeurs.',
            category: 'development',
            pricing: 'freemium',
            url: 'https://www.digitalocean.com',
            logo: 'https://upload.wikimedia.org/wikipedia/commons/4/4e/DigitalOcean_logo.svg',
            popular: false,
            new: false
        },
        {
            id: 'circleci',
            name: 'CircleCI',
            description: 'Plateforme d\'intégration continue.',
            category: 'development',
            pricing: 'freemium',
            url: 'https://circleci.com',
            logo: 'https://upload.wikimedia.org/wikipedia/commons/4/4e/CircleCI_logo.svg',
            popular: false,
            new: false
        },
        {
            id: 'travisci',
            name: 'Travis CI',
            description: 'Service d\'intégration continue.',
            category: 'development',
            pricing: 'freemium',
            url: 'https://www.travisci.com',
            logo: 'https://upload.wikimedia.org/wikipedia/commons/4/4e/Travis_CI_logo.svg',
            popular: false,
            new: false
        },
        {
            id: 'jenkins',
            name: 'Jenkins',
            description: 'Serveur d\'intégration continue open-source.',
            category: 'development',
            pricing: 'free',
            url: 'https://www.jenkins.io',
            logo: 'https://upload.wikimedia.org/wikipedia/commons/4/4e/Jenkins_logo.svg',
            popular: false,
            new: false
        },
        {
            id: 'postman',
            name: 'Postman',
            description: 'Outil de test d\'API.',
            category: 'development',
            pricing: 'freemium',
            url: 'https://www.postman.com',
            logo: 'https://upload.wikimedia.org/wikipedia/commons/4/4e/Postman_logo.svg',
            popular: true,
            new: false
        },
        {
            id: 'insomnia',
            name: 'Insomnia',
            description: 'Client REST pour tester des API.',
            category: 'development',
            pricing: 'freemium',
            url: 'https://insomnia.rest',
            logo: 'https://upload.wikimedia.org/wikipedia/commons/4/4e/Insomnia_logo.svg',
            popular: false,
            new: false
        },
        
        // Marketing supplémentaires
        {
            id: 'semrush',
            name: 'SEMrush',
            description: 'Outil de SEO et marketing digital.',
            category: 'marketing',
            pricing: 'paid',
            url: 'https://www.semrush.com',
            logo: 'https://upload.wikimedia.org/wikipedia/commons/4/4e/SEMrush_logo.svg',
            popular: true,
            new: false
        },
        {
            id: 'ahrefs',
            name: 'Ahrefs',
            description: 'Outil d\'analyse SEO et backlinks.',
            category: 'marketing',
            pricing: 'paid',
            url: 'https://ahrefs.com',
            logo: 'https://upload.wikimedia.org/wikipedia/commons/4/4e/Ahrefs_logo.svg',
            popular: true,
            new: false
        },
        {
            id: 'moz',
            name: 'Moz',
            description: 'Outil de SEO et marketing inbound.',
            category: 'marketing',
            pricing: 'freemium',
            url: 'https://moz.com',
            logo: 'https://upload.wikimedia.org/wikipedia/commons/4/4e/Moz_logo.svg',
            popular: false,
            new: false
        },
        {
            id: 'hootsuite',
            name: 'Hootsuite',
            description: 'Plateforme de gestion des réseaux sociaux.',
            category: 'marketing',
            pricing: 'freemium',
            url: 'https://hootsuite.com',
            logo: 'https://upload.wikimedia.org/wikipedia/commons/4/4e/Hootsuite_logo.svg',
            popular: false,
            new: false
        },
        {
            id: 'buffer',
            name: 'Buffer',
            description: 'Outil de planification de contenu social.',
            category: 'marketing',
            pricing: 'freemium',
            url: 'https://buffer.com',
            logo: 'https://upload.wikimedia.org/wikipedia/commons/4/4e/Buffer_logo.svg',
            popular: false,
            new: false
        },
        {
            id: 'canva-2',
            name: 'Canva',
            description: 'Outil de design graphique pour marketing.',
            category: 'marketing',
            pricing: 'freemium',
            url: 'https://www.canva.com',
            logo: 'https://upload.wikimedia.org/wikipedia/commons/0/0c/Canva_logo.svg',
            popular: true,
            new: false
        },
        {
            id: 'unbounce',
            name: 'Unbounce',
            description: 'Créateur de landing pages.',
            category: 'marketing',
            pricing: 'paid',
            url: 'https://unbounce.com',
            logo: 'https://upload.wikimedia.org/wikipedia/commons/4/4e/Unbounce_logo.svg',
            popular: false,
            new: false
        },
        {
            id: 'instapage',
            name: 'Instapage',
            description: 'Plateforme de création de landing pages.',
            category: 'marketing',
            pricing: 'paid',
            url: 'https://instapage.com',
            logo: 'https://upload.wikimedia.org/wikipedia/commons/4/4e/Instapage_logo.svg',
            popular: false,
            new: false
        },
        {
            id: 'hotjar',
            name: 'Hotjar',
            description: 'Outil d\'analyse comportementale.',
            category: 'marketing',
            pricing: 'freemium',
            url: 'https://www.hotjar.com',
            logo: 'https://upload.wikimedia.org/wikipedia/commons/4/4e/Hotjar_logo.svg',
            popular: true,
            new: false
        },
        {
            id: 'optimizely',
            name: 'Optimizely',
            description: 'Plateforme d\'A/B testing.',
            category: 'marketing',
            pricing: 'freemium',
            url: 'https://www.optimizely.com',
            logo: 'https://upload.wikimedia.org/wikipedia/commons/4/4e/Optimizely_logo.svg',
            popular: false,
            new: false
        },
        
        // Communication supplémentaires
        {
            id: 'telegram',
            name: 'Telegram',
            description: 'Application de messagerie cloud.',
            category: 'communication',
            pricing: 'free',
            url: 'https://telegram.org',
            logo: 'https://upload.wikimedia.org/wikipedia/commons/4/4e/Telegram_logo.svg',
            popular: true,
            new: false
        },
        {
            id: 'whatsapp',
            name: 'WhatsApp',
            description: 'Application de messagerie.',
            category: 'communication',
            pricing: 'free',
            url: 'https://www.whatsapp.com',
            logo: 'https://upload.wikimedia.org/wikipedia/commons/4/4e/WhatsApp_logo.svg',
            popular: true,
            new: false
        },
        {
            id: 'skype',
            name: 'Skype',
            description: 'Service de communication Microsoft.',
            category: 'communication',
            pricing: 'free',
            url: 'https://www.skype.com',
            logo: 'https://upload.wikimedia.org/wikipedia/commons/4/4e/Skype_logo.svg',
            popular: false,
            new: false
        },
        {
            id: 'google-meet',
            name: 'Google Meet',
            description: 'Service de visioconférence Google.',
            category: 'communication',
            pricing: 'free',
            url: 'https://meet.google.com',
            logo: 'https://upload.wikimedia.org/wikipedia/commons/4/4e/Google_Meet_logo.svg',
            popular: true,
            new: false
        },
        {
            id: 'webex',
            name: 'Cisco Webex',
            description: 'Plateforme de collaboration vidéo.',
            category: 'communication',
            pricing: 'freemium',
            url: 'https://www.webex.com',
            logo: 'https://upload.wikimedia.org/wikipedia/commons/4/4e/Webex_logo.svg',
            popular: false,
            new: false
        },
        {
            id: 'gotomeeting',
            name: 'GoToMeeting',
            description: 'Service de visioconférence.',
            category: 'communication',
            pricing: 'paid',
            url: 'https://www.gotomeeting.com',
            logo: 'https://upload.wikimedia.org/wikipedia/commons/4/4e/GoToMeeting_logo.svg',
            popular: false,
            new: false
        },
        
        // Business
        {
            id: 'salesforce',
            name: 'Salesforce',
            description: 'Plateforme CRM pour entreprises.',
            category: 'business',
            pricing: 'paid',
            url: 'https://www.salesforce.com',
            logo: 'https://upload.wikimedia.org/wikipedia/commons/4/4e/Salesforce_logo.svg',
            popular: true,
            new: false
        },
        {
            id: 'zendesk',
            name: 'Zendesk',
            description: 'Plateforme de service client.',
            category: 'business',
            pricing: 'freemium',
            url: 'https://www.zendesk.com',
            logo: 'https://upload.wikimedia.org/wikipedia/commons/4/4e/Zendesk_logo.svg',
            popular: true,
            new: false
        },
        {
            id: 'freshdesk',
            name: 'Freshdesk',
            description: 'Logiciel de support client.',
            category: 'business',
            pricing: 'freemium',
            url: 'https://freshdesk.com',
            logo: 'https://upload.wikimedia.org/wikipedia/commons/4/4e/Freshdesk_logo.svg',
            popular: false,
            new: false
        },
        {
            id: 'intercom',
            name: 'Intercom',
            description: 'Plateforme de communication client.',
            category: 'business',
            pricing: 'freemium',
            url: 'https://www.intercom.com',
            logo: 'https://upload.wikimedia.org/wikipedia/commons/4/4e/Intercom_logo.svg',
            popular: true,
            new: false
        },
        {
            id: 'pipedrive',
            name: 'Pipedrive',
            description: 'CRM pour équipes de vente.',
            category: 'business',
            pricing: 'paid',
            url: 'https://www.pipedrive.com',
            logo: 'https://upload.wikimedia.org/wikipedia/commons/4/4e/Pipedrive_logo.svg',
            popular: false,
            new: false
        },
        {
            id: 'zoho',
            name: 'Zoho',
            description: 'Suite d\'applications business.',
            category: 'business',
            pricing: 'freemium',
            url: 'https://www.zoho.com',
            logo: 'https://upload.wikimedia.org/wikipedia/commons/4/4e/Zoho_logo.svg',
            popular: false,
            new: false
        },
        {
            id: 'quickbooks',
            name: 'QuickBooks',
            description: 'Logiciel de comptabilité.',
            category: 'business',
            pricing: 'paid',
            url: 'https://quickbooks.intuit.com',
            logo: 'https://upload.wikimedia.org/wikipedia/commons/4/4e/QuickBooks_logo.svg',
            popular: false,
            new: false
        },
        {
            id: 'xero',
            name: 'Xero',
            description: 'Logiciel de comptabilité cloud.',
            category: 'business',
            pricing: 'paid',
            url: 'https://www.xero.com',
            logo: 'https://upload.wikimedia.org/wikipedia/commons/4/4e/Xero_logo.svg',
            popular: false,
            new: false
        },
        
        // Finance
        {
            id: 'stripe',
            name: 'Stripe',
            description: 'Infrastructure de paiements en ligne.',
            category: 'finance',
            pricing: 'freemium',
            url: 'https://stripe.com',
            logo: 'https://upload.wikimedia.org/wikipedia/commons/4/4e/Stripe_logo.svg',
            popular: true,
            new: false
        },
        {
            id: 'paypal',
            name: 'PayPal',
            description: 'Service de paiement en ligne.',
            category: 'finance',
            pricing: 'freemium',
            url: 'https://www.paypal.com',
            logo: 'https://upload.wikimedia.org/wikipedia/commons/4/4e/PayPal_logo.svg',
            popular: true,
            new: false
        },
        {
            id: 'wise',
            name: 'Wise',
            description: 'Service de transfert d\'argent international.',
            category: 'finance',
            pricing: 'freemium',
            url: 'https://wise.com',
            logo: 'https://upload.wikimedia.org/wikipedia/commons/4/4e/Wise_logo.svg',
            popular: false,
            new: false
        },
        {
            id: 'revolut',
            name: 'Revolut',
            description: 'Banque mobile et service financier.',
            category: 'finance',
            pricing: 'freemium',
            url: 'https://www.revolut.com',
            logo: 'https://upload.wikimedia.org/wikipedia/commons/4/4e/Revolut_logo.svg',
            popular: false,
            new: false
        },
        {
            id: 'quickbooks-2',
            name: 'QuickBooks',
            description: 'Logiciel de comptabilité.',
            category: 'finance',
            pricing: 'paid',
            url: 'https://quickbooks.intuit.com',
            logo: 'https://upload.wikimedia.org/wikipedia/commons/4/4e/QuickBooks_logo.svg',
            popular: false,
            new: false
        },
        {
            id: 'xero-2',
            name: 'Xero',
            description: 'Logiciel de comptabilité cloud.',
            category: 'finance',
            pricing: 'paid',
            url: 'https://www.xero.com',
            logo: 'https://upload.wikimedia.org/wikipedia/commons/4/4e/Xero_logo.svg',
            popular: false,
            new: false
        },
        {
            id: 'expensify',
            name: 'Expensify',
            description: 'Application de gestion de dépenses.',
            category: 'finance',
            pricing: 'freemium',
            url: 'https://www.expensify.com',
            logo: 'https://upload.wikimedia.org/wikipedia/commons/4/4e/Expensify_logo.svg',
            popular: false,
            new: false
        },
        
        // Automatisation
        {
            id: 'zapier',
            name: 'Zapier',
            description: 'Plateforme d\'automatisation sans code.',
            category: 'automation',
            pricing: 'freemium',
            url: 'https://zapier.com',
            logo: 'https://upload.wikimedia.org/wikipedia/commons/4/4e/Zapier_logo.svg',
            popular: true,
            new: false
        },
        {
            id: 'ifttt',
            name: 'IFTTT',
            description: 'Service d\'automatisation simple.',
            category: 'automation',
            pricing: 'freemium',
            url: 'https://ifttt.com',
            logo: 'https://upload.wikimedia.org/wikipedia/commons/4/4e/IFTTT_logo.svg',
            popular: false,
            new: false
        },
        {
            id: 'make',
            name: 'Make',
            description: 'Plateforme d\'automatisation visuelle.',
            category: 'automation',
            pricing: 'freemium',
            url: 'https://www.make.com',
            logo: 'https://upload.wikimedia.org/wikipedia/commons/4/4e/Make_logo.svg',
            popular: false,
            new: true
        },
        {
            id: 'n8n',
            name: 'n8n',
            description: 'Plateforme d\'automatisation open-source.',
            category: 'automation',
            pricing: 'freemium',
            url: 'https://n8n.io',
            logo: 'https://upload.wikimedia.org/wikipedia/commons/4/4e/n8n_logo.svg',
            popular: false,
            new: true
        },
        {
            id: 'automateio',
            name: 'Automate.io',
            description: 'Outil d\'automatisation pour entreprises.',
            category: 'automation',
            pricing: 'freemium',
            url: 'https://automate.io',
            logo: 'https://upload.wikimedia.org/wikipedia/commons/4/4e/Automate.io_logo.svg',
            popular: false,
            new: false
        },
        
        // Analytics
        {
            id: 'google-analytics-4',
            name: 'Google Analytics 4',
            description: 'Outil d\'analyse web de Google.',
            category: 'analytics',
            pricing: 'free',
            url: 'https://analytics.google.com',
            logo: 'https://upload.wikimedia.org/wikipedia/commons/6/66/Google_Analytics_Logo.svg',
            popular: true,
            new: false
        },
        {
            id: 'mixpanel',
            name: 'Mixpanel',
            description: 'Plateforme d\'analytics produit.',
            category: 'analytics',
            pricing: 'freemium',
            url: 'https://mixpanel.com',
            logo: 'https://upload.wikimedia.org/wikipedia/commons/4/4e/Mixpanel_logo.svg',
            popular: false,
            new: false
        },
        {
            id: 'amplitude',
            name: 'Amplitude',
            description: 'Analytics produit pour applications.',
            category: 'analytics',
            pricing: 'freemium',
            url: 'https://amplitude.com',
            logo: 'https://upload.wikimedia.org/wikipedia/commons/4/4e/Amplitude_logo.svg',
            popular: false,
            new: false
        },
        {
            id: 'tableau',
            name: 'Tableau',
            description: 'Plateforme de visualisation de données.',
            category: 'analytics',
            pricing: 'freemium',
            url: 'https://www.tableau.com',
            logo: 'https://upload.wikimedia.org/wikipedia/commons/4/4e/Tableau_logo.svg',
            popular: true,
            new: false
        },
        {
            id: 'looker',
            name: 'Looker',
            description: 'Plateforme d\'analytics business.',
            category: 'analytics',
            pricing: 'paid',
            url: 'https://looker.com',
            logo: 'https://upload.wikimedia.org/wikipedia/commons/4/4e/Looker_logo.svg',
            popular: false,
            new: false
        },
        {
            id: 'powerbi',
            name: 'Power BI',
            description: 'Outil de visualisation de données Microsoft.',
            category: 'analytics',
            pricing: 'freemium',
            url: 'https://powerbi.microsoft.com',
            logo: 'https://upload.wikimedia.org/wikipedia/commons/4/4e/Power_BI_logo.svg',
            popular: true,
            new: false
        },
        {
            id: 'klipfolio',
            name: 'Klipfolio',
            description: 'Plateforme de dashboards et KPIs.',
            category: 'analytics',
            pricing: 'freemium',
            url: 'https://www.klipfolio.com',
            logo: 'https://upload.wikimedia.org/wikipedia/commons/4/4e/Klipfolio_logo.svg',
            popular: false,
            new: false
        },
        {
            id: 'datastudio',
            name: 'Google Data Studio',
            description: 'Outil de reporting gratuit de Google.',
            category: 'analytics',
            pricing: 'free',
            url: 'https://datastudio.google.com',
            logo: 'https://upload.wikimedia.org/wikipedia/commons/4/4e/Google_Data_Studio_logo.svg',
            popular: false,
            new: false
        },
        
        // Outils supplémentaires divers
        {
            id: 'grammarly',
            name: 'Grammarly',
            description: 'Assistant d\'écriture et correction.',
            category: 'productivity',
            pricing: 'freemium',
            url: 'https://www.grammarly.com',
            logo: 'https://upload.wikimedia.org/wikipedia/commons/4/4e/Grammarly_logo.svg',
            popular: true,
            new: false
        },
        {
            id: 'hemingway',
            name: 'Hemingway Editor',
            description: 'Éditeur pour améliorer la clarté du texte.',
            category: 'productivity',
            pricing: 'freemium',
            url: 'https://hemingwayapp.com',
            logo: 'https://upload.wikimedia.org/wikipedia/commons/4/4e/Hemingway_Editor_logo.svg',
            popular: false,
            new: false
        },
        {
            id: 'lastpass',
            name: 'LastPass',
            description: 'Gestionnaire de mots de passe.',
            category: 'productivity',
            pricing: 'freemium',
            url: 'https://www.lastpass.com',
            logo: 'https://upload.wikimedia.org/wikipedia/commons/4/4e/LastPass_logo.svg',
            popular: true,
            new: false
        },
        {
            id: '1password',
            name: '1Password',
            description: 'Gestionnaire de mots de passe sécurisé.',
            category: 'productivity',
            pricing: 'paid',
            url: 'https://1password.com',
            logo: 'https://upload.wikimedia.org/wikipedia/commons/4/4e/1Password_logo.svg',
            popular: false,
            new: false
        },
        {
            id: 'bitwarden',
            name: 'Bitwarden',
            description: 'Gestionnaire de mots de passe open-source.',
            category: 'productivity',
            pricing: 'freemium',
            url: 'https://bitwarden.com',
            logo: 'https://upload.wikimedia.org/wikipedia/commons/4/4e/Bitwarden_logo.svg',
            popular: false,
            new: false
        },
        {
            id: 'calendly',
            name: 'Calendly',
            description: 'Outil de planification de rendez-vous.',
            category: 'productivity',
            pricing: 'freemium',
            url: 'https://calendly.com',
            logo: 'https://upload.wikimedia.org/wikipedia/commons/4/4e/Calendly_logo.svg',
            popular: true,
            new: false
        },
        {
            id: 'doodle',
            name: 'Doodle',
            description: 'Outil de planification de sondages.',
            category: 'productivity',
            pricing: 'freemium',
            url: 'https://doodle.com',
            logo: 'https://upload.wikimedia.org/wikipedia/commons/4/4e/Doodle_logo.svg',
            popular: false,
            new: false
        },
        {
            id: 'typeform',
            name: 'Typeform',
            description: 'Créateur de formulaires et sondages.',
            category: 'productivity',
            pricing: 'freemium',
            url: 'https://www.typeform.com',
            logo: 'https://upload.wikimedia.org/wikipedia/commons/4/4e/Typeform_logo.svg',
            popular: true,
            new: false
        },
        {
            id: 'google-forms',
            name: 'Google Forms',
            description: 'Créateur de formulaires gratuit de Google.',
            category: 'productivity',
            pricing: 'free',
            url: 'https://forms.google.com',
            logo: 'https://upload.wikimedia.org/wikipedia/commons/4/4e/Google_Forms_logo.svg',
            popular: true,
            new: false
        },
        {
            id: 'survey-monkey',
            name: 'SurveyMonkey',
            description: 'Plateforme de sondages en ligne.',
            category: 'productivity',
            pricing: 'freemium',
            url: 'https://www.surveymonkey.com',
            logo: 'https://upload.wikimedia.org/wikipedia/commons/4/4e/SurveyMonkey_logo.svg',
            popular: false,
            new: false
        },
        {
            id: 'loom',
            name: 'Loom',
            description: 'Outil d\'enregistrement vidéo.',
            category: 'communication',
            pricing: 'freemium',
            url: 'https://www.loom.com',
            logo: 'https://upload.wikimedia.org/wikipedia/commons/4/4e/Loom_logo.svg',
            popular: true,
            new: false
        },
        {
            id: 'vidyard',
            name: 'Vidyard',
            description: 'Plateforme de vidéo pour entreprises.',
            category: 'communication',
            pricing: 'freemium',
            url: 'https://www.vidyard.com',
            logo: 'https://upload.wikimedia.org/wikipedia/commons/4/4e/Vidyard_logo.svg',
            popular: false,
            new: false
        },
        {
            id: 'wistia',
            name: 'Wistia',
            description: 'Hébergement vidéo marketing.',
            category: 'communication',
            pricing: 'freemium',
            url: 'https://wistia.com',
            logo: 'https://upload.wikimedia.org/wikipedia/commons/4/4e/Wistia_logo.svg',
            popular: false,
            new: false
        },
        {
            id: 'vimeo',
            name: 'Vimeo',
            description: 'Plateforme de vidéo haute qualité.',
            category: 'communication',
            pricing: 'freemium',
            url: 'https://vimeo.com',
            logo: 'https://upload.wikimedia.org/wikipedia/commons/4/4e/Vimeo_logo.svg',
            popular: true,
            new: false
        },
        {
            id: 'youtube',
            name: 'YouTube',
            description: 'Plateforme de partage vidéo.',
            category: 'communication',
            pricing: 'free',
            url: 'https://www.youtube.com',
            logo: 'https://upload.wikimedia.org/wikipedia/commons/4/4e/YouTube_logo.svg',
            popular: true,
            new: false
        },
        {
            id: 'twitch',
            name: 'Twitch',
            description: 'Plateforme de streaming live.',
            category: 'communication',
            pricing: 'free',
            url: 'https://www.twitch.tv',
            logo: 'https://upload.wikimedia.org/wikipedia/commons/4/4e/Twitch_logo.svg',
            popular: true,
            new: false
        },
        {
            id: 'tiktok',
            name: 'TikTok',
            description: 'Réseau social vidéo court.',
            category: 'communication',
            pricing: 'free',
            url: 'https://www.tiktok.com',
            logo: 'https://upload.wikimedia.org/wikipedia/commons/4/4e/TikTok_logo.svg',
            popular: true,
            new: false
        },
        {
            id: 'instagram',
            name: 'Instagram',
            description: 'Réseau social photo et vidéo.',
            category: 'communication',
            pricing: 'free',
            url: 'https://www.instagram.com',
            logo: 'https://upload.wikimedia.org/wikipedia/commons/4/4e/Instagram_logo.svg',
            popular: true,
            new: false
        },
        {
            id: 'linkedin',
            name: 'LinkedIn',
            description: 'Réseau social professionnel.',
            category: 'business',
            pricing: 'freemium',
            url: 'https://www.linkedin.com',
            logo: 'https://upload.wikimedia.org/wikipedia/commons/4/4e/LinkedIn_logo.svg',
            popular: true,
            new: false
        },
        {
            id: 'twitter',
            name: 'Twitter',
            description: 'Réseau social micro-blogging.',
            category: 'communication',
            pricing: 'free',
            url: 'https://twitter.com',
            logo: 'https://upload.wikimedia.org/wikipedia/commons/4/4e/Twitter_logo.svg',
            popular: true,
            new: false
        },
        {
            id: 'facebook',
            name: 'Facebook',
            description: 'Réseau social.',
            category: 'communication',
            pricing: 'free',
            url: 'https://www.facebook.com',
            logo: 'https://upload.wikimedia.org/wikipedia/commons/4/4e/Facebook_logo.svg',
            popular: true,
            new: false
        },
        {
            id: 'pinterest',
            name: 'Pinterest',
            description: 'Réseau social d\'images.',
            category: 'communication',
            pricing: 'free',
            url: 'https://www.pinterest.com',
            logo: 'https://upload.wikimedia.org/wikipedia/commons/4/4e/Pinterest_logo.svg',
            popular: false,
            new: false
        },
        {
            id: 'reddit',
            name: 'Reddit',
            description: 'Agrégateur de contenu communautaire.',
            category: 'communication',
            pricing: 'free',
            url: 'https://www.reddit.com',
            logo: 'https://upload.wikimedia.org/wikipedia/commons/4/4e/Reddit_logo.svg',
            popular: true,
            new: false
        },
        {
            id: 'quora',
            name: 'Quora',
            description: 'Plateforme de questions-réponses.',
            category: 'communication',
            pricing: 'free',
            url: 'https://www.quora.com',
            logo: 'https://upload.wikimedia.org/wikipedia/commons/4/4e/Quora_logo.svg',
            popular: false,
            new: false
        },
        {
            id: 'medium',
            name: 'Medium',
            description: 'Plateforme de publication d\'articles.',
            category: 'communication',
            pricing: 'freemium',
            url: 'https://medium.com',
            logo: 'https://upload.wikimedia.org/wikipedia/commons/4/4e/Medium_logo.svg',
            popular: false,
            new: false
        },
        {
            id: 'substack',
            name: 'Substack',
            description: 'Plateforme de newsletters.',
            category: 'communication',
            pricing: 'freemium',
            url: 'https://substack.com',
            logo: 'https://upload.wikimedia.org/wikipedia/commons/4/4e/Substack_logo.svg',
            popular: false,
            new: true
        },
        {
            id: 'wordpress',
            name: 'WordPress',
            description: 'CMS pour sites web.',
            category: 'development',
            pricing: 'freemium',
            url: 'https://wordpress.com',
            logo: 'https://upload.wikimedia.org/wikipedia/commons/4/4e/WordPress_logo.svg',
            popular: true,
            new: false
        },
        {
            id: 'shopify',
            name: 'Shopify',
            description: 'Plateforme e-commerce.',
            category: 'business',
            pricing: 'freemium',
            url: 'https://www.shopify.com',
            logo: 'https://upload.wikimedia.org/wikipedia/commons/4/4e/Shopify_logo.svg',
            popular: true,
            new: false
        },
        {
            id: 'woocommerce',
            name: 'WooCommerce',
            description: 'Plugin e-commerce pour WordPress.',
            category: 'business',
            pricing: 'free',
            url: 'https://woocommerce.com',
            logo: 'https://upload.wikimedia.org/wikipedia/commons/4/4e/WooCommerce_logo.svg',
            popular: true,
            new: false
        },
        {
            id: 'squarespace',
            name: 'Squarespace',
            description: 'Créateur de sites web.',
            category: 'design',
            pricing: 'paid',
            url: 'https://www.squarespace.com',
            logo: 'https://upload.wikimedia.org/wikipedia/commons/4/4e/Squarespace_logo.svg',
            popular: true,
            new: false
        },
        {
            id: 'wix',
            name: 'Wix',
            description: 'Créateur de sites web.',
            category: 'design',
            pricing: 'freemium',
            url: 'https://www.wix.com',
            logo: 'https://upload.wikimedia.org/wikipedia/commons/4/4e/Wix_logo.svg',
            popular: true,
            new: false
        },
        {
            id: 'elementor',
            name: 'Elementor',
            description: 'Constructeur de pages WordPress.',
            category: 'design',
            pricing: 'freemium',
            url: 'https://elementor.com',
            logo: 'https://upload.wikimedia.org/wikipedia/commons/4/4e/Elementor_logo.svg',
            popular: false,
            new: false
        },
        {
            id: 'divi',
            name: 'Divi',
            description: 'Thème et constructeur WordPress.',
            category: 'design',
            pricing: 'paid',
            url: 'https://www.elegantthemes.com',
            logo: 'https://upload.wikimedia.org/wikipedia/commons/4/4e/Divi_logo.svg',
            popular: false,
            new: false
        },
        {
            id: 'avada',
            name: 'Avada',
            description: 'Thème WordPress populaire.',
            category: 'design',
            pricing: 'paid',
            url: 'https://theme-fusion.com',
            logo: 'https://upload.wikimedia.org/wikipedia/commons/4/4e/Avada_logo.svg',
            popular: false,
            new: false
        },
        {
            id: 'astra',
            name: 'Astra',
            description: 'Thème WordPress léger.',
            category: 'design',
            pricing: 'freemium',
            url: 'https://wpastra.com',
            logo: 'https://upload.wikimedia.org/wikipedia/commons/4/4e/Astra_logo.svg',
            popular: false,
            new: false
        },
        {
            id: 'generatepress',
            name: 'GeneratePress',
            description: 'Thème WordPress rapide.',
            category: 'design',
            pricing: 'freemium',
            url: 'https://generatepress.com',
            logo: 'https://upload.wikimedia.org/wikipedia/commons/4/4e/GeneratePress_logo.svg',
            popular: false,
            new: false
        },
        {
            id: 'tailwindcss',
            name: 'Tailwind CSS',
            description: 'Framework CSS utility-first.',
            category: 'development',
            pricing: 'free',
            url: 'https://tailwindcss.com',
            logo: 'https://upload.wikimedia.org/wikipedia/commons/4/4e/Tailwind_CSS_logo.svg',
            popular: true,
            new: false
        },
        {
            id: 'bootstrap',
            name: 'Bootstrap',
            description: 'Framework CSS populaire.',
            category: 'development',
            pricing: 'free',
            url: 'https://getbootstrap.com',
            logo: 'https://upload.wikimedia.org/wikipedia/commons/4/4e/Bootstrap_logo.svg',
            popular: true,
            new: false
        },
        {
            id: 'react',
            name: 'React',
            description: 'Bibliothèque JavaScript pour interfaces.',
            category: 'development',
            pricing: 'free',
            url: 'https://react.dev',
            logo: 'https://upload.wikimedia.org/wikipedia/commons/4/4e/React_logo.svg',
            popular: true,
            new: false
        },
        {
            id: 'vue',
            name: 'Vue.js',
            description: 'Framework JavaScript progressif.',
            category: 'development',
            pricing: 'free',
            url: 'https://vuejs.org',
            logo: 'https://upload.wikimedia.org/wikipedia/commons/4/4e/Vue.js_logo.svg',
            popular: true,
            new: false
        },
        {
            id: 'angular',
            name: 'Angular',
            description: 'Framework JavaScript de Google.',
            category: 'development',
            pricing: 'free',
            url: 'https://angular.io',
            logo: 'https://upload.wikimedia.org/wikipedia/commons/4/4e/Angular_logo.svg',
            popular: true,
            new: false
        },
        {
            id: 'svelte',
            name: 'Svelte',
            description: 'Framework JavaScript moderne.',
            category: 'development',
            pricing: 'free',
            url: 'https://svelte.dev',
            logo: 'https://upload.wikimedia.org/wikipedia/commons/4/4e/Svelte_logo.svg',
            popular: false,
            new: true
        },
        {
            id: 'nextjs',
            name: 'Next.js',
            description: 'Framework React pour production.',
            category: 'development',
            pricing: 'free',
            url: 'https://nextjs.org',
            logo: 'https://upload.wikimedia.org/wikipedia/commons/4/4e/Next.js_logo.svg',
            popular: true,
            new: false
        },
        {
            id: 'nuxt',
            name: 'Nuxt',
            description: 'Framework Vue pour production.',
            category: 'development',
            pricing: 'free',
            url: 'https://nuxt.com',
            logo: 'https://upload.wikimedia.org/wikipedia/commons/4/4e/Nuxt_logo.svg',
            popular: false,
            new: false
        },
        {
            id: 'nodejs',
            name: 'Node.js',
            description: 'Runtime JavaScript côté serveur.',
            category: 'development',
            pricing: 'free',
            url: 'https://nodejs.org',
            logo: 'https://upload.wikimedia.org/wikipedia/commons/4/4e/Node.js_logo.svg',
            popular: true,
            new: false
        },
        {
            id: 'python',
            name: 'Python',
            description: 'Langage de programmation polyvalent.',
            category: 'development',
            pricing: 'free',
            url: 'https://www.python.org',
            logo: 'https://upload.wikimedia.org/wikipedia/commons/4/4e/Python_logo.svg',
            popular: true,
            new: false
        },
        {
            id: 'javascript',
            name: 'JavaScript',
            description: 'Langage de programmation web.',
            category: 'development',
            pricing: 'free',
            url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript',
            logo: 'https://upload.wikimedia.org/wikipedia/commons/4/4e/JavaScript_logo.svg',
            popular: true,
            new: false
        },
        {
            id: 'typescript',
            name: 'TypeScript',
            description: 'Superset typé de JavaScript.',
            category: 'development',
            pricing: 'free',
            url: 'https://www.typescriptlang.org',
            logo: 'https://upload.wikimedia.org/wikipedia/commons/4/4e/TypeScript_logo.svg',
            popular: true,
            new: false
        },
        {
            id: 'php',
            name: 'PHP',
            description: 'Langage de programmation web.',
            category: 'development',
            pricing: 'free',
            url: 'https://www.php.net',
            logo: 'https://upload.wikimedia.org/wikipedia/commons/4/4e/PHP_logo.svg',
            popular: true,
            new: false
        },
        {
            id: 'mysql',
            name: 'MySQL',
            description: 'Système de gestion de base de données.',
            category: 'development',
            pricing: 'free',
            url: 'https://www.mysql.com',
            logo: 'https://upload.wikimedia.org/wikipedia/commons/4/4e/MySQL_logo.svg',
            popular: true,
            new: false
        },
        {
            id: 'postgresql',
            name: 'PostgreSQL',
            description: 'Système de base de données relationnelle.',
            category: 'development',
            pricing: 'free',
            url: 'https://www.postgresql.org',
            logo: 'https://upload.wikimedia.org/wikipedia/commons/4/4e/PostgreSQL_logo.svg',
            popular: true,
            new: false
        },
        {
            id: 'mongodb',
            name: 'MongoDB',
            description: 'Base de données NoSQL.',
            category: 'development',
            pricing: 'free',
            url: 'https://www.mongodb.com',
            logo: 'https://upload.wikimedia.org/wikipedia/commons/4/4e/MongoDB_logo.svg',
            popular: true,
            new: false
        },
        {
            id: 'redis',
            name: 'Redis',
            description: 'Base de données en mémoire.',
            category: 'development',
            pricing: 'free',
            url: 'https://redis.io',
            logo: 'https://upload.wikimedia.org/wikipedia/commons/4/4e/Redis_logo.svg',
            popular: false,
            new: false
        },
        {
            id: 'elasticsearch',
            name: 'Elasticsearch',
            description: 'Moteur de recherche et analytics.',
            category: 'development',
            pricing: 'free',
            url: 'https://www.elastic.co',
            logo: 'https://upload.wikimedia.org/wikipedia/commons/4/4e/Elasticsearch_logo.svg',
            popular: false,
            new: false
        },
        {
            id: 'graphql',
            name: 'GraphQL',
            description: 'Langage de requête pour APIs.',
            category: 'development',
            pricing: 'free',
            url: 'https://graphql.org',
            logo: 'https://upload.wikimedia.org/wikipedia/commons/4/4e/GraphQL_logo.svg',
            popular: false,
            new: false
        },
        {
            id: 'rest',
            name: 'REST API',
            description: 'Architecture d\'API web.',
            category: 'development',
            pricing: 'free',
            url: 'https://restfulapi.net',
            logo: 'https://upload.wikimedia.org/wikipedia/commons/4/4e/REST_API_logo.svg',
            popular: false,
            new: false
        },
        {
            id: 'json',
            name: 'JSON',
            description: 'Format de données léger.',
            category: 'development',
            pricing: 'free',
            url: 'https://www.json.org',
            logo: 'https://upload.wikimedia.org/wikipedia/commons/4/4e/JSON_logo.svg',
            popular: false,
            new: false
        },
        {
            id: 'xml',
            name: 'XML',
            description: 'Format de données structuré.',
            category: 'development',
            pricing: 'free',
            url: 'https://www.w3.org/XML',
            logo: 'https://upload.wikimedia.org/wikipedia/commons/4/4e/XML_logo.svg',
            popular: false,
            new: false
        },
        {
            id: 'markdown',
            name: 'Markdown',
            description: 'Langage de balisage léger.',
            category: 'productivity',
            pricing: 'free',
            url: 'https://www.markdownguide.org',
            logo: 'https://upload.wikimedia.org/wikipedia/commons/4/4e/Markdown_logo.svg',
            popular: false,
            new: false
        },
        {
            id: 'yaml',
            name: 'YAML',
            description: 'Format de configuration.',
            category: 'development',
            pricing: 'free',
            url: 'https://yaml.org',
            logo: 'https://upload.wikimedia.org/wikipedia/commons/4/4e/YAML_logo.svg',
            popular: false,
            new: false
        },
        {
            id: 'git',
            name: 'Git',
            description: 'Système de contrôle de version.',
            category: 'development',
            pricing: 'free',
            url: 'https://git-scm.com',
            logo: 'https://upload.wikimedia.org/wikipedia/commons/4/4e/Git_logo.svg',
            popular: true,
            new: false
        },
        {
            id: 'svn',
            name: 'SVN',
            description: 'Système de contrôle de version.',
            category: 'development',
            pricing: 'free',
            url: 'https://subversion.apache.org',
            logo: 'https://upload.wikimedia.org/wikipedia/commons/4/4e/SVN_logo.svg',
            popular: false,
            new: false
        },
        {
            id: 'mercurial',
            name: 'Mercurial',
            description: 'Système de contrôle de version.',
            category: 'development',
            pricing: 'free',
            url: 'https://www.mercurial-scm.org',
            logo: 'https://upload.wikimedia.org/wikipedia/commons/4/4e/Mercurial_logo.svg',
            popular: false,
            new: false
        },
        {
            id: 'linux',
            name: 'Linux',
            description: 'Système d\'exploitation open-source.',
            category: 'development',
            pricing: 'free',
            url: 'https://www.linux.org',
            logo: 'https://upload.wikimedia.org/wikipedia/commons/4/4e/Linux_logo.svg',
            popular: true,
            new: false
        },
        {
            id: 'ubuntu',
            name: 'Ubuntu',
            description: 'Distribution Linux populaire.',
            category: 'development',
            pricing: 'free',
            url: 'https://ubuntu.com',
            logo: 'https://upload.wikimedia.org/wikipedia/commons/4/4e/Ubuntu_logo.svg',
            popular: true,
            new: false
        },
        {
            id: 'debian',
            name: 'Debian',
            description: 'Distribution Linux stable.',
            category: 'development',
            pricing: 'free',
            url: 'https://www.debian.org',
            logo: 'https://upload.wikimedia.org/wikipedia/commons/4/4e/Debian_logo.svg',
            popular: false,
            new: false
        },
        {
            id: 'centos',
            name: 'CentOS',
            description: 'Distribution Linux entreprise.',
            category: 'development',
            pricing: 'free',
            url: 'https://www.centos.org',
            logo: 'https://upload.wikimedia.org/wikipedia/commons/4/4e/CentOS_logo.svg',
            popular: false,
            new: false
        },
        {
            id: 'fedora',
            name: 'Fedora',
            description: 'Distribution Linux innovante.',
            category: 'development',
            pricing: 'free',
            url: 'https://fedoraproject.org',
            logo: 'https://upload.wikimedia.org/wikipedia/commons/4/4e/Fedora_logo.svg',
            popular: false,
            new: false
        },
        {
            id: 'docker-compose',
            name: 'Docker Compose',
            description: 'Outil pour définir des applications Docker multi-conteneurs.',
            category: 'development',
            pricing: 'free',
            url: 'https://docs.docker.com/compose',
            logo: 'https://upload.wikimedia.org/wikipedia/commons/4/4e/Docker_Compose_logo.svg',
            popular: false,
            new: false
        },
        {
            id: 'kubernetes-helm',
            name: 'Helm',
            description: 'Gestionnaire de paquets pour Kubernetes.',
            category: 'development',
            pricing: 'free',
            url: 'https://helm.sh',
            logo: 'https://upload.wikimedia.org/wikipedia/commons/4/4e/Helm_logo.svg',
            popular: false,
            new: false
        },
        {
            id: 'terraform',
            name: 'Terraform',
            description: 'Outil d\'infrastructure as code.',
            category: 'development',
            pricing: 'free',
            url: 'https://www.terraform.io',
            logo: 'https://upload.wikimedia.org/wikipedia/commons/4/4e/Terraform_logo.svg',
            popular: true,
            new: false
        },
        {
            id: 'ansible',
            name: 'Ansible',
            description: 'Outil d\'automatisation IT.',
            category: 'development',
            pricing: 'free',
            url: 'https://www.ansible.com',
            logo: 'https://upload.wikimedia.org/wikipedia/commons/4/4e/Ansible_logo.svg',
            popular: false,
            new: false
        },
        {
            id: 'chef',
            name: 'Chef',
            description: 'Outil d\'automatisation IT.',
            category: 'development',
            pricing: 'freemium',
            url: 'https://www.chef.io',
            logo: 'https://upload.wikimedia.org/wikipedia/commons/4/4e/Chef_logo.svg',
            popular: false,
            new: false
        },
        {
            id: 'puppet',
            name: 'Puppet',
            description: 'Outil d\'automatisation IT.',
            category: 'development',
            pricing: 'freemium',
            url: 'https://puppet.com',
            logo: 'https://upload.wikimedia.org/wikipedia/commons/4/4e/Puppet_logo.svg',
            popular: false,
            new: false
        },
        {
            id: 'vagrant',
            name: 'Vagrant',
            description: 'Outil de construction d\'environnements de développement.',
            category: 'development',
            pricing: 'free',
            url: 'https://www.vagrantup.com',
            logo: 'https://upload.wikimedia.org/wikipedia/commons/4/4e/Vagrant_logo.svg',
            popular: false,
            new: false
        },
        {
            id: 'packer',
            name: 'Packer',
            description: 'Outil de création d\'images machine.',
            category: 'development',
            pricing: 'free',
            url: 'https://www.packer.io',
            logo: 'https://upload.wikimedia.org/wikipedia/commons/4/4e/Packer_logo.svg',
            popular: false,
            new: false
        },
        {
            id: 'consul',
            name: 'Consul',
            description: 'Outil de découverte de services.',
            category: 'development',
            pricing: 'free',
            url: 'https://www.consul.io',
            logo: 'https://upload.wikimedia.org/wikipedia/commons/4/4e/Consul_logo.svg',
            popular: false,
            new: false
        },
        {
            id: 'vault',
            name: 'Vault',
            description: 'Outil de gestion de secrets.',
            category: 'development',
            pricing: 'free',
            url: 'https://www.vaultproject.io',
            logo: 'https://upload.wikimedia.org/wikipedia/commons/4/4e/Vault_logo.svg',
            popular: false,
            new: false
        },
        {
            id: 'nomad',
            name: 'Nomad',
            description: 'Orchestrateur de workloads.',
            category: 'development',
            pricing: 'free',
            url: 'https://www.nomadproject.io',
            logo: 'https://upload.wikimedia.org/wikipedia/commons/4/4e/Nomad_logo.svg',
            popular: false,
            new: false
        }
    ]
};

// Fonctions utilitaires pour le catalogue
const CatalogUtils = {
    // Récupérer tous les outils d'une catégorie
    getByCategory: (categoryId) => {
        return TOOLS_CATALOG.tools.filter(tool => tool.category === categoryId);
    },
    
    // Récupérer les outils populaires
    getPopular: () => {
        return TOOLS_CATALOG.tools.filter(tool => tool.popular);
    },
    
    // Récupérer les nouveaux outils
    getNew: () => {
        return TOOLS_CATALOG.tools.filter(tool => tool.new);
    },
    
    // Rechercher des outils
    search: (query) => {
        const lowerQuery = query.toLowerCase();
        return TOOLS_CATALOG.tools.filter(tool => 
            tool.name.toLowerCase().includes(lowerQuery) ||
            tool.description.toLowerCase().includes(lowerQuery)
        );
    },
    
    // Filtrer par type de prix
    getByPricing: (pricingType) => {
        return TOOLS_CATALOG.tools.filter(tool => tool.pricing === pricingType);
    },
    
    // Récupérer un outil par ID
    getById: (id) => {
        return TOOLS_CATALOG.tools.find(tool => tool.id === id);
    }
};

// Export pour utilisation
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { TOOLS_CATALOG, CatalogUtils };
}
