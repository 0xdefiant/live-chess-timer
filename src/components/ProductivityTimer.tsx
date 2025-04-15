import { useEffect, useRef, useState } from 'react';
import { Box, Button, Heading, HStack, Text, VStack, Field } from '@chakra-ui/react';
import { Switch } from '../components/ui/switch';
import Clock from './Clock';


function ProductivityTimer() {
    const [userTimeElapsed, setUserTimeElapsed] = useState(0);
    const [timeOffElapsed, setTimeOffElapsed] = useState(0);

    const [isUserTimeActive, setIsUserTimeActive] = useState(true);

    const [isRunning, setIsRunning] = useState(false);

    const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

    useEffect(() => {
        if(isRunning) {
            intervalRef.current = setInterval(() => {
                if(isUserTimeActive) {
                    setUserTimeElapsed((previousTime) => previousTime + 1);
                } else {
                    setTimeOffElapsed((previousTime) => previousTime + 1);
                }
            }, 1000);
        } else {
            if(intervalRef.current) {
                clearInterval(intervalRef.current);
                intervalRef.current = null;
            }
        }
        return () => {
            if (intervalRef.current) {
                clearInterval(intervalRef.current);
            }
        };
    }, [isRunning, isUserTimeActive]);
    
    const switchTimer = (activateUser: boolean) => {
        setIsUserTimeActive(activateUser);
        if(!isRunning) { setIsRunning(true); }
    }

    const toggleTimer = () => {
        setIsRunning(!isRunning);
    }

    const resetTimer = () => {
        setIsRunning(false);
        setUserTimeElapsed(0);
        setTimeOffElapsed(0);
        setIsUserTimeActive(true);
        if (intervalRef.current) {
            clearInterval(intervalRef.current);
            intervalRef.current = null;
        }
    }

    return (
        <Box p={8}>
            <VStack gap={6} align="stretch">
                <Heading as="header" size="xl" textAlign="center">
                    Productivity Timer
                </Heading>

                <Text textAlign="center" fontSize="sm" color="gray.500">
                    Click the time buttons to switch the active timer.
                </Text>

                <Clock isUserTimeActive={isUserTimeActive} userTimeElapsed={userTimeElapsed} timeOffElapsed={timeOffElapsed} />

                {/* Toggle Switch for User/Off state */}
                <Field.Root display="flex" alignItems="center" justifyContent="center">
                    <Field.Label htmlFor="timer-toggle" mb="0" mr={3} color={isUserTimeActive ? "green.500" : "gray.500"}>
                        User (Productive)
                    </Field.Label>
                    <Switch
                        id="timer-toggle"
                        checked={!isUserTimeActive}
                        onCheckedChange={() => switchTimer(!isUserTimeActive)}
                        colorPalette={isUserTimeActive ? "green" : "red" }
                        size="lg"
                    />
                    <Field.Label htmlFor="timer-toggle" mb="0" ml={3} color={!isUserTimeActive ? "red.500" : "gray.500"}>
                        Time Off (Lazy)
                    </Field.Label>
                </Field.Root>

                <HStack gap={4} justify="center">
                    <Button 
                        onClick={toggleTimer} 
                        colorScheme="ghost"
                        w="100px"
                        h="auto"
                        whiteSpace="normal"
                    >
                        {isRunning ? 'Stop' : 'Start'}
                    </Button>
                    <Button 
                        onClick={resetTimer} 
                        variant="ghost"
                        w="100px"
                        h="auto"
                        whiteSpace="normal"
                    >
                        Reset
                    </Button>
                </HStack>

                <Text textAlign="center" fontSize="sm" color="gray.500">
                    Click the time buttons to switch the active timer.
                </Text>
            </VStack>
        </Box>
    );
}

export default ProductivityTimer;
