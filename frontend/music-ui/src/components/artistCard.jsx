import { useNavigate } from "react-router-dom";

const ArtistCard = ({ artist }) => {
  const navigate = useNavigate();

  return (
    <div
      className="artist-card"
      onClick={() => navigate(`/artist/${artist._id}`)}
    >
      <img
        src={artist.image}
        alt={artist.name}
        className="artist-image"
        onError={(e) => {
          e.target.onerror = null;
          e.target.src = "/default-artist.png";
        }}
      />
      <h4>{artist.name}</h4>
    </div>
  );
};

export default ArtistCard;
