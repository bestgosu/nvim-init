let printCode = async (plugin)=>{
	try {
		const buffer = await plugin.nvim.buffer;
		const lines = await buffer.lines;

		buffer.setLines("after gosugosu", {
			start: 0,
			end: -1,
			strictIndexing: true,
		});
	} catch (err) {
		console.error(err);
	}
};

export default printCode;

