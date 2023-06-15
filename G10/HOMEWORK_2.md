# HOMEWORK 2

## General info

Let's build an online music player for organising music. Use React :)

## Requirments:

1. Create a React App
2. Organise code in components as you think is appropriate
3. Use functional components!
4. Show list of songs and have at least 5 songs. Each song should show title, artistName and duration. Add a button with abbility to add the song to a playlist
5. Show playlist of songs (we only have one playlist). Show same data as for previos list, but the button here should remove the song from the playlist

### Bonus
1. Once a song is added to a playlist, disable the "Add" button so that we can't add the same song to the playlist twice
2. Above the list of songs in the playlist, show a sum of all duration of all songs in the playlist (in seconds).

### Song Model
id: number
title: string
artistName: string
duration: number (seconds)

### Example song
```
{
	id: 1,
	title: 'In the club',
	artistName: '50 cent',
	duration: 193
}
```
