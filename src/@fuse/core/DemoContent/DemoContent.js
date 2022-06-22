import { memo } from "react";

function DemoContent() {
	return (
		<div>
			<h1 className="py-16 font-semibold">
				payments and others will show up here
			</h1>
			<h4 className="pb-12 font-medium">Demo dashboard</h4>
			<p>The dashboard will appear here</p>
		</div>
	);
}

export default memo(DemoContent);
