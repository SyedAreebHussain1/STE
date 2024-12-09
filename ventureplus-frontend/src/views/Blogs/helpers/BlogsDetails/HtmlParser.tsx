const HTMLParser = ({ htmlString }: { htmlString: string }) => {
  return (
    <div
      dangerouslySetInnerHTML={{ __html: htmlString }}
      style={{
        width: "100%",
        padding: "20px",
        boxSizing: "border-box",
      }}
    />
  );
};

export default HTMLParser;
