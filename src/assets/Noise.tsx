export const Noise = () => {
  return (
    <svg>
<filter id="grainy">
    <feTurbulence
    type="fractalNoise"
    baseFrequency={0.2}
    
    />

</filter>
    </svg>
  )
}





