const owner = {
	firstName: "Khushi",
	lastName: "Choudhary",
	role: "AI & ML Developer ",
	experience: 3,
}

const projects = [
	{
		name: "Chat Bot",
		description: "You can chat with my bot and get my resume and more information about me.",
		tags: ["HTML", "CSS", "JS"],
		image: "infra",
		liveURL: "https://venkivijay.github.io/resume/",
		sourceURL: "https://khushi-portfolio-chat.vercel.app/",
	},
	{
		name: "Website",
		description: "Simple website for showcasing your products.",
		tags: ["HTML", "CSS", "JS"],
		image: "resume",
		liveURL: "https://khushichoudhary1020.github.io/giftcustomisation/",
		sourceURL: "https://github.com/khushichoudhary1020/giftcustomisation",
	},
	{
		name: "Product Customisation",
		description: "You can change the color of your product.",
		tags: ["Nuxt.js", "PWA"],
		image: "xplore",
		liveURL: "https://khushichoudhary1020.github.io/DummyCustomisation/",
		sourceURL: "https://github.com/khushichoudhary1020/DummyCustomisation",
	},
	{
		name: "Links",
		description: "Linktree like bio hosting my social links",
		tags: ["Vue", "PostCSS", "Vite"],
		image: "link",
		liveURL: "https://github.com/khushichoudhary1020/",
		sourceURL: "https://github.com/khushichoudhary1020/",
	},
	{
		name: "One Link",
		description: "Creates a link of all your social links and website to share every link at a time",
		tags: ["Nuxt", "Tailwind"],
		image: "links",
		liveURL: "https://onelinkgenerator.vercel.app/",
		sourceURL: "https://github.com/khushichoudhary1020/onelinkgenerator",
	},
	
]

const socials = [
	{
		name: "GitHub",
		primaryIcon: "github",
		url: "https://github.com/khushichoudhary1020",
	},
	{
		name: "LinkedIn",
		primaryIcon: "linkedin",
		url: "https://www.linkedin.com/in/khushi-choudhary-a6b781226/",
	},
	{
		name: "Twitter",
		primaryIcon: "twitter",
		url: "https://twitter.com/priyemporary2",
	},
	{
		name: "WhatsApp",
		primaryIcon: "whatsapp",
		url: "https://wa.me/+917717457974",
	},
]

const contact = {
	location: "Jalandhar, PB",
	email: "khushichoudhary1020@gmail.com",
	phone: "+91-7717457974",
}

const skills = [
	{ slug: "akamai", name: "Linode" },
	{ slug: "amazonapigateway", name: "API Gateway" },
	{ slug: "amazonaws", name: "AWS" },
	{ slug: "amazoncloudwatch", name: "CloudWatch" },
	{ slug: "amazonec2", name: "EC2" },
	{ slug: "amazonecs", name: "ECS" },
	{ slug: "amazoneks", name: "EKS" },
	{ slug: "amazonrds", name: "RDS" },
	{ slug: "amazons3", name: "S3" },
	{ slug: "amazonsqs", name: "SQS" },
	{ slug: "ansible", name: "Ansible" },
	{ slug: "apachekafka", name: "Kafka" },
	{ slug: "apachetomcat", name: "Tomcat" },
	{ slug: "arduino", name: "Arduino" },
	{ slug: "awslambda", name: "Lambda" },
	{ slug: "backstage", name: "Backstage" },
	{ slug: "centos", name: "CentOS" },
	{ slug: "debian", name: "Debian" },
	{ slug: "docker", name: "Docker" },
	{ slug: "firebase", name: "Firebase" },
	{ slug: "git", name: "Git" },
	{ slug: "github", name: "GitHub" },
	{ slug: "gitlab", name: "GitLab" },
	{ slug: "gnubash", name: "Bash" },
	{ slug: "grafana", name: "Grafana" },
	{ slug: "helm", name: "HELM" },
	{ slug: "json", name: "JSON" },
	{ slug: "kibana", name: "Kibana" },
	{ slug: "kubernetes", name: "Kubernetes" },
	{ slug: "letsencrypt", name: "Let's Encrypt" },
	{ slug: "linux", name: "Linux" },
	{ slug: "metabase", name: "Metabase" },
	{ slug: "netlify", name: "Netlify" },
	{ slug: "nodedotjs", name: "Node.js" },
	{ slug: "npm", name: "npm" },
	{ slug: "obsidian", name: "Obsidian" },
	{ slug: "opensearch", name: "OpenSearch" },
	{ slug: "opentelemetry", name: "OTEL" },
	{ slug: "portainer", name: "Portainer" },
	{ slug: "postgresql", name: "PostgreSQL" },
	{ slug: "prettier", name: "Prettier" },
	{ slug: "prometheus", name: "Prometheus" },
	{ slug: "python", name: "Python" },
	{ slug: "redhat", name: "RedHat" },
	{ slug: "tailwindcss", name: "Tailwind CSS" },
	{ slug: "threedotjs", name: "Three.js" },
	{ slug: "tmux", name: "tmux" },
	{ slug: "ubuntu", name: "Ubuntu" },
	{ slug: "vuedotjs", name: "Vue.js" },
	{ slug: "wordpress", name: "Wordpress" },
]

export { owner, projects, socials, contact, skills }
