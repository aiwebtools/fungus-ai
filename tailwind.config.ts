
import type { Config } from "tailwindcss";

export default {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px'
			}
		},
		extend: {
			colors: {
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
				sidebar: {
					DEFAULT: 'hsl(var(--sidebar-background))',
					foreground: 'hsl(var(--sidebar-foreground))',
					primary: 'hsl(var(--sidebar-primary))',
					'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
					accent: 'hsl(var(--sidebar-accent))',
					'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
					border: 'hsl(var(--sidebar-border))',
					ring: 'hsl(var(--sidebar-ring))'
				},
				fungus: {
					dark: "#121218",
					purple: "#8B5CF6",
					blue: "#3B82F6",
					cyan: "#06B6D4",
					pink: "#EC4899",
					yellow: "#F59E0B",
					green: "#10B981"
				}
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			keyframes: {
				'accordion-down': {
					from: {
						height: '0'
					},
					to: {
						height: 'var(--radix-accordion-content-height)'
					}
				},
				'accordion-up': {
					from: {
						height: 'var(--radix-accordion-content-height)'
					},
					to: {
						height: '0'
					}
				},
				'float': {
					'0%, 100%': { 
						transform: 'translateY(0) rotate(0deg)',
						opacity: '0.8'
					},
					'25%': { 
						transform: 'translateY(-15px) rotate(90deg)',
						opacity: '1'
					},
					'50%': { 
						transform: 'translateY(-10px) rotate(180deg)',
						opacity: '0.9'
					},
					'75%': { 
						transform: 'translateY(-20px) rotate(270deg)',
						opacity: '1'
					}
				},
				'pulse-glow': {
					'0%, 100%': { 
						opacity: '0.6',
						filter: 'brightness(1) saturate(1) hue-rotate(0deg)',
						transform: 'scale(1)'
					},
					'25%': { 
						opacity: '0.9',
						filter: 'brightness(1.4) saturate(1.3) hue-rotate(90deg)',
						transform: 'scale(1.05)'
					},
					'50%': { 
						opacity: '1',
						filter: 'brightness(1.6) saturate(1.5) hue-rotate(180deg)',
						transform: 'scale(1.1)'
					},
					'75%': { 
						opacity: '0.8',
						filter: 'brightness(1.3) saturate(1.2) hue-rotate(270deg)',
						transform: 'scale(1.03)'
					}
				},
				'rotate-slow': {
					from: { transform: 'rotate(0deg)' },
					to: { transform: 'rotate(360deg)' }
				},
				'shimmer': {
					'0%': { 
						backgroundPosition: '-500px 0',
						opacity: '0.8'
					},
					'50%': { 
						backgroundPosition: '0px 0',
						opacity: '1'
					},
					'100%': { 
						backgroundPosition: '500px 0',
						opacity: '0.8'
					}
				},
				'scale-up': {
					'0%': { 
						transform: 'scale(0.9) translateY(20px)', 
						opacity: '0',
						filter: 'blur(4px)'
					},
					'100%': { 
						transform: 'scale(1) translateY(0)', 
						opacity: '1',
						filter: 'blur(0px)'
					}
				},
				'fade-in': {
					from: { opacity: '0', transform: 'translateY(10px)' },
					to: { opacity: '1', transform: 'translateY(0)' }
				},
				'slide-up': {
					from: { transform: 'translateY(30px)', opacity: '0' },
					to: { transform: 'translateY(0)', opacity: '1' }
				},
				'slide-down': {
					from: { transform: 'translateY(-30px)', opacity: '0' },
					to: { transform: 'translateY(0)', opacity: '1' }
				},
				'divine-glow': {
					'0%, 100%': { 
						boxShadow: '0 0 20px rgba(168, 85, 247, 0.4), 0 0 40px rgba(236, 72, 153, 0.3), 0 0 60px rgba(59, 130, 246, 0.2)',
						filter: 'hue-rotate(0deg)'
					},
					'33%': { 
						boxShadow: '0 0 30px rgba(236, 72, 153, 0.5), 0 0 50px rgba(59, 130, 246, 0.4), 0 0 70px rgba(16, 185, 129, 0.3)',
						filter: 'hue-rotate(120deg)'
					},
					'66%': { 
						boxShadow: '0 0 25px rgba(59, 130, 246, 0.5), 0 0 45px rgba(16, 185, 129, 0.4), 0 0 65px rgba(168, 85, 247, 0.3)',
						filter: 'hue-rotate(240deg)'
					}
				}
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				'float': 'float 8s ease-in-out infinite',
				'pulse-glow': 'pulse-glow 6s ease-in-out infinite',
				'rotate-slow': 'rotate-slow 20s linear infinite',
				'shimmer': 'shimmer 3s linear infinite',
				'scale-up': 'scale-up 0.8s ease-out',
				'fade-in': 'fade-in 0.6s ease-out',
				'slide-up': 'slide-up 0.6s ease-out',
				'slide-down': 'slide-down 0.6s ease-out',
				'divine-glow': 'divine-glow 4s ease-in-out infinite'
			},
			backgroundImage: {
				'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
				'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
				'shimmer': 'linear-gradient(90deg, rgba(255,255,255,0) 0%, rgba(168,85,247,0.3) 25%, rgba(236,72,153,0.3) 50%, rgba(59,130,246,0.3) 75%, rgba(255,255,255,0) 100%)',
				'divine-gradient': 'linear-gradient(45deg, rgba(168,85,247,0.2) 0%, rgba(236,72,153,0.2) 25%, rgba(59,130,246,0.2) 50%, rgba(16,185,129,0.2) 75%, rgba(245,158,11,0.2) 100%)'
			},
			spacing: {
				'18': '4.5rem',
				'88': '22rem',
				'128': '32rem'
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
