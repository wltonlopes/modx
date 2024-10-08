g_BackgroundLayerData.push(
	[
		{
			"offset": (time, width) => 0.02 * width * Math.cos(0.08 * time) + width/16,
			"sprite": "background-b2",
			"tiling": false,
		}
	]);
