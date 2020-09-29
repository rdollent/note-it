import React, { useState } from 'react';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { useHistory } from 'react-router-dom';
import { withRouter } from 'react-router';


import Video from './Video';
import TextEditor from './TextEditor';

const VideoPage = (props) => {
    return (
        <div>
            <Video />
            <TextEditor />
        </div>
    )
}

export default withRouter(VideoPage);