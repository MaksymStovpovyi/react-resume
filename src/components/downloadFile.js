import React from 'react';

class DownloadLink extends React.Component {
  render() {
    const { fileUrl, fileName } = this.props;
    return (
      <a href={fileUrl} download={fileName}>
        Download my resume
      </a>
    );
  }
}

export default DownloadLink;
