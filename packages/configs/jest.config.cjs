/*

	@opencalc/configs/jest.config.cjs

	This is used as the main 
	configuration file for Jest.
    
	Copyright (C) 2022, Anokidev. All right reserved.
  OpenCalc is open source and is licensed in MIT License.

*/

module.exports = {
  moduleFileExtensions: ['js', 'json', 'ts'],

  rootDir: 'src',
  testRegex: '.*\\.spec\\.ts$',

  transform: {
    '^.+\\.(t|j)s$': 'ts-jest',
  },

  collectCoverageFrom: ['**/*.(t|j)s'],

  coverageDirectory: '../coverage',
  testEnvironment: 'node',
};
