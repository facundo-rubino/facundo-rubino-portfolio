const YouTubeEmbed = ({ embedId }:any) => {
  return (
    <div className="aspect-w-16 h-full dark:bg-black-100">
      <iframe
        className="w-10/12 h-full frameborder-0 m-auto"
        src={`https://www.youtube.com/embed/${embedId}`}
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default YouTubeEmbed;
