# Unexpected useEffect Executions in React

This repository demonstrates a common but subtle bug in React's `useEffect` hook where it runs multiple times despite an empty dependency array. The issue is usually related to how state updates or prop changes indirectly trigger the effect, even when it appears to be isolated.

## Bug Description
The `useEffect` hook in the example code is intended to run only once when the component mounts. However, due to an implicit dependency (e.g., a prop or a closure), it ends up running more than once, leading to performance issues and potential logical errors.

## Solution
The solution involves identifying any implicit dependencies and explicitly listing them in the dependency array.  Using the `useRef` hook can sometimes help avoid these implicit dependencies by storing values that shouldn't trigger re-renders.