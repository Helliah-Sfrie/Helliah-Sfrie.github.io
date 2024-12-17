export const data = {
    header: {
        name: "Krystel Swin",
        links: [
            { label: "Home", id: "home" },
            { label: "About", id: "about" },
            { label: "Interests", id: "interests" },
            { label: "Skills", id: "skills" },
            { label: "Education", id: "education" },
            { label: "Contact", id: "contact" },
            { label: "Projects", id: "projects" }
        ]
    },
    home: {
        name: "Krystel Swin",
        dynamicText: [
            "a BS Geodetic Engineering Student.",
            "an Aspiring Coder.",
            "learning Spatial Data Engineering and Spatial Data Science."
        ],
        socialLinks: [
            { icon: "fa-facebook", url: "https://www.facebook.com/princess.swin/" },
            { icon: "fa-github", url: "https://github.com/Helliah-Sfrie" }
        ],
        image: "img/krystel-img.png"
    },
    about: {
        image: "img/krystel-about.jpg",
        description: "I’m a strong-willed and enthusiastic student with a deep interest in programming, mapping, and spatial data science. Through hands-on experience and a solid understanding of core concepts, I’ve developed a growing passion for these fields. I thrive on applying my skills to real-world projects and enjoy building practical solutions that make an impact.",
        details: {
            Birthday: "23 June 2003",
            City: "Balanga, Bataan",
            Phone: "+63 906-206-7795",
            Email: "ksswin@up.edu.ph"
        }
    },
    interests: [
        { icon: "fa-globe", text: "Geospatial Mapping and Analysis using Python" },
        { icon: "fa-robot", text: "Machine Learning" },
        { icon: "fa-chart-column", text: "Data Visualization" },
        { icon: "fa-map-location-dot", text: "Spatial Econometrics" }
    ],
    skills: {
        "Programming": ["Python", "R", "JavaScript"],
        "GIS Tools": ["QGIS", "ArcGIS", "GeoPandas", "OSMnx"],
        "Visualization": ["D3.js", "Matplotlib", "Seaborn", "Folium"],
        "Data Handling": ["Jupyter Notebooks", "SQL", "Pandas", "NumPy"],
        "Graph Analysis": ["NetworkX"],
        "Geospatial Analysis": ["Spatial autocorrelation", "Spatial regression"],
        "Libraries": ["Shapely", "PySAL", "Mapclassify"],

    },
    education: [
        {
            logo: "img/logo-bnhs.png",
            title: "Bataan National Highschool – SHS (2019-2021)",
            details: [
                "Science, Technology, Engineering, and Mathematics",
                "With Highest Honors",
                "Batch Valedictorian"
            ]
        },
        {
            logo: "img/logo-up.png",
            title: "University of the Philippines Diliman (2021-present)",
            details: [
                "Undergraduate | BS in Geodetic Engineering",
                "University Scholar, AY 2021-2022",
                "University Scholar, AY 2022-2023",
                "University Scholar, AY 2023-2024"
            ]
        }
    ],
    contact: {
        email: "ksswin@up.edu.ph",
        facebook: "https://www.facebook.com/princess.swin/",
        phone: "09062067795",
        github: "https://github.com/Helliah-Sfrie",
        address: "Sanggumay Residence Hall, University of the Philippines – Diliman"
    },
    projects: [
        {
            title: "Exercise 1 part 1",
            link: "https://colab.research.google.com/drive/1KS7rhR46ianfLpfxlrlgyNsQqFhovlzD?usp=sharing",
            description: "This project focuses on geospatial analysis using Python to extract, process, and visualize OpenStreetMap data.",
            tasks: "Extracted and visualized geospatial data, calculated building density, and created barangay-level building density maps.",
            tools: "Python (GeoPandas, osmnx, Matplotlib, Pandas), OpenStreetMap data.",
            skills: "Geospatial data extraction, spatial analysis, data visualization, urban planning.",
            outcome: "Generated valuable insights into urban building density patterns through effective geospatial data analysis and visualization."
        },
        {
            title: "Exercise 1 part 2",
            link: "https://colab.research.google.com/drive/1YjNP0_8Lzceyy6qCDIWYnk6oJWDbqrE1?usp=sharing",
            description: "This project explores spatial regression techniques to understand factors influencing vacation rental prices in Metro Manila.",
            tasks: "Processed geospatial data, performed statistical and spatial regression analysis, and visualized spatial dependencies.",
            tools: "Python (GeoPandas, PySAL, Matplotlib, Seaborn, Folium, Mapclassify), TripAdvisor Vacation Rental Data, OpenStreetMap.",
            skills: "Geospatial data cleaning, spatial regression modeling, visualization of spatial data.",
            outcome: "Developed insights into rental pricing dynamics by integrating spatial heterogeneity and autocorrelation effects."
        }
    ]
};
