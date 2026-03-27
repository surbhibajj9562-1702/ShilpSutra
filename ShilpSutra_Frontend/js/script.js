
// Mock Data for Heritage Page
const heritageData = [
    {
        state: "Rajasthan",
        crafts: "Blue Pottery, Block Printing",
        materials: "Quartz, Clay, Cotton",
        importance: "Blue pottery is known for its distinctive blue glaze and complex designs."
    },
    {
        state: "Uttar Pradesh",
        crafts: "Chikankari, Brassware",
        materials: "Muslin, Silk, Brass",
        importance: "Chikankari is a delicate and artfully done hand embroidery on a variety of textile fabrics."
    },
    {
        state: "West Bengal",
        crafts: "Kantha Stitch, Terracotta",
        materials: "Old Sarees, Clay",
        importance: "Kantha is a type of embroidery craft in the eastern regions of the Indian subcontinent."
    },
    {
        state: "Gujarat",
        crafts: "Bandhani, Patola",
        materials: "Silk, Cotton",
        importance: "Bandhani is a type of tie-dye textile decorated by plucking the cloth with the fingernails into many tiny bindings."
    },
    {
        state: "Tamil Nadu",
        crafts: "Kanchipuram Silk, Thanjavur Paintings",
        materials: "Silk, Gold Foil",
        importance: "Kanchipuram silk sarees are known for their golden zari borders and intricate designs."
    }
];

// Authentication Logic
const setupAuthPage = () => {
    const fileInput = document.getElementById('fileInput');
    const uploadBox = document.querySelector('.upload-box');
    const preview = document.getElementById('imagePreview');
    const verifyBtn = document.getElementById('verifyBtn');

    if (!fileInput) return;

    // Handle File Drop
    uploadBox.addEventListener('dragover', (e) => {
        e.preventDefault();
        uploadBox.style.backgroundColor = 'rgba(212, 175, 55, 0.1)';
    });

    uploadBox.addEventListener('dragleave', () => {
        uploadBox.style.backgroundColor = 'transparent';
    });

    uploadBox.addEventListener('drop', (e) => {
        e.preventDefault();
        uploadBox.style.backgroundColor = 'transparent';
        const file = e.dataTransfer.files[0];
        handleFile(file);
    });

    // Handle Click
    uploadBox.addEventListener('click', () => {
        fileInput.click();
    });

    fileInput.addEventListener('change', (e) => {
        const file = e.target.files[0];
        handleFile(file);
    });

    function handleFile(file) {
        if (file && file.type.startsWith('image/')) {
            const reader = new FileReader();
            reader.onload = (e) => {
                preview.src = e.target.result;
                preview.style.display = 'block';
                // Store image for result page (in real app, send to server)
                localStorage.setItem('uploadedImage', e.target.result);
            };
            reader.readAsDataURL(file);
        }
    }

    verifyBtn.addEventListener('click', () => {
        if (preview.src) {
            // Simulate processing
            verifyBtn.textContent = "Analyzing...";
            setTimeout(() => {
                window.location.href = 'result.html';
            }, 1500);
        } else {
            alert("Please upload an image first.");
        }
    });
};

// Result Page Logic
const setupResultPage = () => {
    const resultBadge = document.getElementById('resultBadge');
    const confidenceScore = document.getElementById('confidenceScore');
    const explanation = document.getElementById('explanation');
    
    if (!resultBadge) return;

    // Simulate Random Result
    const isAuthentic = Math.random() > 0.3; // 70% chance authentic
    const score = Math.floor(Math.random() * (99 - 85) + 85); // 85-99%

    if (isAuthentic) {
        resultBadge.innerHTML = '✅ Authentic Handcrafted Design';
        resultBadge.className = 'result-badge authentic';
        explanation.innerText = "The analysis detected consistent hand-woven patterns and natural irregularities typical of authentic craftsmanship. The texture depth aligns with traditional methods.";
    } else {
        resultBadge.innerHTML = '❌ Likely Machine-Made / Fake';
        resultBadge.className = 'result-badge fake';
        explanation.innerText = "The analysis detected uniform, repetitive machine patterns and a lack of natural texture depth. The stitching consistency suggests mass production.";
    }

    confidenceScore.innerText = `Confidence Score: ${score}%`;
};

// Heritage Page Logic
const setupHeritagePage = () => {
    const searchInput = document.getElementById('stateSearch');
    const searchBtn = document.getElementById('searchBtn');
    const resultsContainer = document.getElementById('heritageResults');

    if (!searchInput) return;

    function searchState() {
        const query = searchInput.value.toLowerCase();
        resultsContainer.innerHTML = '';
        
        const filtered = heritageData.filter(item => item.state.toLowerCase().includes(query));

        if (filtered.length > 0) {
            filtered.forEach(item => {
                const card = document.createElement('div');
                card.className = 'craft-card';
                card.innerHTML = `
                    <h3>${item.state}</h3>
                    <p><strong>Famous Crafts:</strong> ${item.crafts}</p>
                    <p><strong>Materials:</strong> ${item.materials}</p>
                    <p><strong>Cultural Importance:</strong> ${item.importance}</p>
                `;
                resultsContainer.appendChild(card);
            });
        } else {
            resultsContainer.innerHTML = '<p>No heritage data found for this state. Try "Rajasthan", "Gujarat", etc.</p>';
        }
    }

    searchBtn.addEventListener('click', searchState);
    searchInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') searchState();
    });
    
    // Load all initially
    if(searchInput.value === "") {
         heritageData.forEach(item => {
                const card = document.createElement('div');
                card.className = 'craft-card';
                card.innerHTML = `
                    <h3>${item.state}</h3>
                    <p><strong>Famous Crafts:</strong> ${item.crafts}</p>
                    <p><strong>Materials:</strong> ${item.materials}</p>
                    <p><strong>Cultural Importance:</strong> ${item.importance}</p>
                `;
                resultsContainer.appendChild(card);
            });
    }
};

// Initialize based on page
document.addEventListener('DOMContentLoaded', () => {
    setupAuthPage();
    setupResultPage();
    setupHeritagePage();
});
