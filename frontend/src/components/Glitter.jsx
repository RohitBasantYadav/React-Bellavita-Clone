// Glitter.js
import React from 'react';
import { Box, useTheme } from '@chakra-ui/react';
import  "../style/Glitter.css"

const Glitter = () => {
  const theme = useTheme();

  const generateGlitter = () => {
    const confettiArray = [];
    const colors = [theme.colors.red[600], theme.colors.yellow[600], theme.colors.green[600], theme.colors.blue[600], theme.colors.purple[600]];
    for (let i = 0; i < 100; i++) {
      const width = Math.random() * 10 + 5;
      const height = Math.random() * 10 + 5;
      const left = Math.random() * 100;
      const delay = Math.random() * 3;
      const duration = 3;
      const color = colors[Math.floor(Math.random() * colors.length)];
      confettiArray.push(
        <Box
          key={i}
          position="absolute"
          bg={color}
          width={`${width}px`}
          height={`${height}px`}
          left={`${left}%`}
          top="0"
          opacity={1}
          animation={`fall ${duration}s ${delay}s ease-in-out 2`}
        />
      );
    }
    return confettiArray;
  };

  return <Box position="absolute" top={0} left={0} width="100%" height="100%" overflow="hidden" pointerEvents="none">{generateGlitter()}</Box>;
};

export default Glitter;
