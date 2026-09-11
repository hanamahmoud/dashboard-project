const links = document.querySelectorAll('.menu a');
const content = document.getElementById('content');

links.forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();

        links.forEach(item => {
            item.classList.remove('active');
        });

        this.classList.add('active');

        if (this.innerText.trim().toLowerCase() === 'clients') {
    content.innerHTML = `
        <div class="title-info">
            <p>Clients</p>
            <i class="fas fa-user-group"></i>
        </div>

        <div class="data-info">

            <div class="box">
                <i class="fas fa-users"></i>
                <div class="data">
                    <p>Total Clients</p>
                    <span>200</span>
                </div>
            </div>

            <div class="box">
                <i class="fas fa-user-check"></i>
                <div class="data">
                    <p>Active Clients</p>
                    <span>180</span>
                </div>
            </div>

            <div class="box">
                <i class="fas fa-user-plus"></i>
                <div class="data">
                    <p>New Clients</p>
                    <span>35</span>
                </div>
            </div>

            <div class="box">
                <i class="fas fa-user-clock"></i>
                <div class="data">
                    <p>Offline Clients</p>
                    <span>20</span>
                </div>
            </div>

        </div>
    `;
}

        if (this.innerText.trim().toLowerCase() === 'dashboard') {
    location.reload();
}

if (this.innerText.trim().toLowerCase() === 'products') {
    content.innerHTML = `
        <div class="title-info">
            <p>Products</p>
            <i class="fas fa-table"></i>
        </div>

        <table>
            <thead>
                <tr>
                    <th>Products</th>
                    <th>Price</th>
                    <th>Count</th>
                </tr>
            </thead>

            <tbody>
                <tr>
                    <td>TV</td>
                    <td><span class="price">$666</span></td>
                    <td><span class="count">422</span></td>
                </tr>

                <tr>
                    <td>Laptop</td>
                    <td><span class="price">$233</span></td>
                    <td><span class="count">980</span></td>
                </tr>

                <tr>
                    <td>Headphones</td>
                    <td><span class="price">$69</span></td>
                    <td><span class="count">42</span></td>
                </tr>

                <tr>
                    <td>Phone</td>
                    <td><span class="price">$533</span></td>
                    <td><span class="count">2888</span></td>
                </tr>

                <tr>
                    <td>Keyboard</td>
                    <td><span class="price">$56</span></td>
                    <td><span class="count">277</span></td>
                </tr>
            </tbody>
        </table>
    `;
}
if (this.innerText.trim().toLowerCase() === 'charts') {
    content.innerHTML = `
        <div class="title-info">
            <p>Charts</p>
            <i class="fas fa-chart-pie"></i>
        </div>

        <div class="chart">
            <div class="bar" style="height: 70%;">
                <span>Users</span>
            </div>

            <div class="bar" style="height: 50%;">
                <span>Posts</span>
            </div>

            <div class="bar" style="height: 90%;">
                <span>Products</span>
            </div>

            <div class="bar" style="height: 60%;">
                <span>Revenue</span>
            </div>
        </div>
    `;
}
if (this.innerText.trim().toLowerCase() === 'posts') {
    content.innerHTML = `
        <div class="title-info">
            <p>Posts</p>
            <i class="fas fa-pen"></i>
        </div>

        <div class="data-info">

            <div class="box">
                <i class="fas fa-file"></i>
                <div class="data">
                    <p>Total Posts</p>
                    <span>420</span>
                </div>
            </div>

            <div class="box">
                <i class="fas fa-check"></i>
                <div class="data">
                    <p>Published</p>
                    <span>380</span>
                </div>
            </div>

            <div class="box">
                <i class="fas fa-file-pen"></i>
                <div class="data">
                    <p>Drafts</p>
                    <span>40</span>
                </div>
            </div>

        </div>

        <button class="create-post" id="createPost">
            <i class="fas fa-plus"></i>
            Create New Post
        </button>

        <div class="posts">

            <div class="post">
                <i class="fas fa-bullhorn"></i>
                <div>
                    <h2>New Product</h2>
                    <p>Our new products are available now!</p>
                    <small>❤️ 120 Likes · 💬 25 Comments</small>
                </div>
            </div>

            <div class="post">
                <i class="fas fa-gift"></i>
                <div>
                    <h2>Special Offer</h2>
                    <p>Don't miss our special offer today.</p>
                    <small>❤️ 250 Likes · 💬 48 Comments</small>
                </div>
            </div>

        </div>
    `;
}
const createPost = document.getElementById('createPost');
if (createPost) {
    createPost.addEventListener('click', function() {

        const title = prompt('Enter post title:');
        const text = prompt('Enter post content:');

        if (title && text) {
            const posts = document.querySelector('.posts');

            posts.innerHTML += `
                <div class="post">
                    <i class="fas fa-pen"></i>
                    <div>
                        <h2>${title}</h2>
                        <p>${text}</p>
                        <small>❤️ 0 Likes · 💬 0 Comments</small>
                    </div>
                </div>
            `;
        }
    });
}


    });
});