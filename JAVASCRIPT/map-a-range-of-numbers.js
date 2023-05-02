const scale = (num, inMin, inMax, outMin, outMax) => {
    return (num- inMin) * (outMax - outMin) / (inMax - inMin) + outMin;
}