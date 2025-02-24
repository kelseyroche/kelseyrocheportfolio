
// import React from 'react';
// import { Card, CardContent, Typography, CardMedia, CardActionArea } from '@mui/material';

// function ProjectCard({ title, description, link, image }) {
//   return (
//     <Card sx={{ maxWidth: 600, backgroundColor: '#f0f0f0', borderRadius: '15px', overflow: 'hidden' }}>
//       <CardActionArea component="a" href={link} target="_blank" rel="noopener noreferrer">
//         {image && (
//           <CardMedia
//             component="img"
//             height="300"
//             image={image}
//             alt={`${title} image`}
//           />
//         )}
//         <CardContent>
//           <Typography variant="h5" component="div">
//             {title}
//           </Typography>
//           <Typography variant="body2" color="text.secondary">
//             {description}
//           </Typography>
//         </CardContent>
//       </CardActionArea>
//     </Card>
//   );
// }

// export default ProjectCard;

import React from 'react';
import { Card, CardContent, Typography, CardMedia, CardActionArea } from '@mui/material';

function ProjectCard({ title, link, image }) {
  return (
    <Card sx={{
      maxWidth: 600,
      backgroundColor: '#fefefe',
      borderRadius: '15px',
      overflow: 'hidden',
      boxShadow: '0 6px 18px rgba(0, 0, 0, 0.2)',
      transition: 'transform 0.3s, box-shadow 0.3s',
      '&:hover': {
        transform: 'scale(1.05)',
        boxShadow: '0 8px 20px rgba(0, 0, 0, 0.3)',
      },
    }}>
      <CardActionArea component="a" href={link} target="_blank" rel="noopener noreferrer">
        {image && (
          <CardMedia
            component="img"
            height="300"
            image={image}
            alt={`${title} image`}
          />
        )}
        <CardContent sx={{ textAlign: 'center', padding: 2 }}>
          <Typography variant="h5" component="div" sx={{ fontWeight: 'bold', color: '#FF86C8' }}>
            {title}
          </Typography>
          <Typography variant="body2" color="text.secondary" sx={{ marginTop: 1 }}>
            {title} - Click to view more!
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}

export default ProjectCard;