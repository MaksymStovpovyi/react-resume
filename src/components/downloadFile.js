import React from 'react';

const DownloadLink = ({ url, filename }) => {
  const handleDownload = () => {
    fetch(url)
      .then((response) => response.blob())
      .then((blob) => {
        const href = window.URL.createObjectURL(blob);
        const link = document.createElement('a');
        link.href = href;
        link.download = filename;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
      });
  };

  return (
    <span onClick={handleDownload}>
      Download my resume {filename}
    </span>
  );
};

export default DownloadLink;