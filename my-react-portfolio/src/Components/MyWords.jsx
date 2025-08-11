import PropTypes from "prop-types";
import dayjs from "dayjs";

export const MyWords = ({ posts }) => {
    return (
        <div className="myWords">
            <h2>My Words</h2>
            <div className="posts">
                {posts.map((post) => (
                    <div key={post.title} className="post">
                        <img className="postImage" src={post.image} alt={post.alt} />
                        <span className="postDate">{dayjs(post.date).format("MMMM YYYY")}</span>
                        <h3 className="postTitle">{post.title}</h3>
                        <p className="postDescription">{post.description}</p>
                        <a className="postLink" href={post.url}>
                            {/* SVG */}
                            Read More
                        </a>
                    </div>
                ))}
            </div>
        </div>
    );
};

MyWords.propTypes = {
    posts: PropTypes.arrayOf(
        PropTypes.shape({
            title: PropTypes.string.isRequired,
            image: PropTypes.string.isRequired,
            alt: PropTypes.string,
            date: PropTypes.string.isRequired,
            description: PropTypes.string.isRequired,
            url: PropTypes.string.isRequired,
        })
    ).isRequired,
};
