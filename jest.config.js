module.exports = {
	coverageDirectory: 'coverage',
	roots: ['<rootDir>/src', '<rootDir>/tests'],
	testMatch: ['**/tests/**/*.+(ts|tsx|js)', '**/?(*.)+(spec|test).+(ts|tsx|js)'],
	transform: {
		'^.+\\.(ts|tsx)$': 'ts-jest',
	},
	collectCoverageFrom: ['**/*.{js,jsx,ts,tsx}', '!**/node_modules/**', '!**/dist/**'],
	setupFiles: ['<rootDir>/scripts/jest/setupEnvironment.ts'],
	moduleNameMapper: {
		'\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$': '<rootDir>/tests/__mocks__/fileMock.js',
		'\\.(css|less)$': '<rootDir>/tests/__mocks__/styleMock.js',
	},
	testPathIgnorePatterns: ['<rootDir>/tests/__mocks__'],
	preset: 'ts-jest',
	testEnvironment: 'jsdom',
}
