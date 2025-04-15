import { Box, Text, Center } from '@chakra-ui/react';

interface ClockProps {
  isUserTimeActive: boolean;
  userTimeElapsed: number;
  timeOffElapsed: number;
}

const formatTime = (time: number) => {
  const minutes = Math.floor(time / 60);
  const seconds = time % 60;
  return `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
};

function Clock({ isUserTimeActive, userTimeElapsed, timeOffElapsed }: ClockProps) {
  const activeTime = isUserTimeActive ? userTimeElapsed : timeOffElapsed;
  
  return (
    <Box 
      borderRadius="50%" 
      width="100%" 
      maxWidth="300px" 
      height="300px"
      mx="auto"
      boxShadow="lg"
      position="relative"
      border="4px solid"
      borderColor={isUserTimeActive ? 'green.500' : 'red.500'}
      bg={isUserTimeActive? 'green.100' : 'red.100'}
    >
      <Center 
        position="absolute" 
        top="0" 
        left="0" 
        right="0" 
        bottom="0"
      >
        <Text 
          fontSize="3xl" 
          fontWeight="bold" 
          color="gray.700"
          fontFamily="mono"
          zIndex="1"
        >
          {formatTime(activeTime)}
        </Text>
      </Center>
      
      {/* Clock center point */}
      <Box 
        position="absolute" 
        top="50%" 
        left="50%" 
        transform="translate(-50%, -50%)" 
        width="12px" 
        height="12px" 
        borderRadius="50%" 
        bg="gray.700" 
        zIndex="2"
      />
      
      {/* Both clock hands are always rendered, but we control visibility based on active state */}
      <Box
        position="absolute"
        top="50%"
        left="50%"
        width="6px"
        height="40%"
        bg="green.500"
        transform={`translateX(-50%) rotate(${userTimeElapsed * 6}deg)`}
        style={{ transformOrigin: '50% 0%' }}
        borderRadius="full"
        transition="opacity 0s, transform 0s"
        zIndex="1"
        opacity={isUserTimeActive ? 1 : 0.3}
      />
      
      <Box
        position="absolute"
        top="50%"
        left="50%"
        width="4px"
        height="35%"
        bg="red.500"
        transform={`translateX(-50%) rotate(${timeOffElapsed * 6}deg)`}
        style={{ transformOrigin: '50% 0%' }}
        borderRadius="full"
        transition="opacity 0s, transform 0s"
        zIndex="1"
        opacity={isUserTimeActive ? 0.3 : 1}
      />
      
      {/* Clock hour markers */}
      {[...Array(12)].map((_, i) => (
        <Box
          key={i}
          position="absolute"
          top="10px"
          left="50%"
          width={i % 3 === 0 ? "4px" : "2px"}
          height={i % 3 === 0 ? "12px" : "8px"}
          bg="gray.700"
          transformOrigin="center 140px"
          transform={`rotate(${i * 30}deg)`}
        />
      ))}
    </Box>
  );
}

export default Clock;