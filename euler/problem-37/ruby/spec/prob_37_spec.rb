require "spec_helper"
require "./prob_37"

describe "test" do
	let(:moka){ Moka.new }
	
	it "check sosu" do
      expect(moka.is_sosu(3)).to eq(true) 
      expect(moka.is_sosu(4)).to eq(false) 
      expect(moka.is_sosu(7)).to eq(true) 
      expect(moka.is_sosu(8)).to eq(false) 
      expect(moka.is_sosu(3797)).to eq(true) 
	end

	it "왼쪽 자릿수 하나 없애기" do
	  expect(moka.remove_l(32)).to eq(2)
	  expect(moka.remove_l(324)).to eq(24)
	  expect(moka.remove_l(3797)).to eq(797)
	end

	it "오른쪽 자릿수 없애기" do
	  expect(moka.remove_r(32)).to eq(3)
	  expect(moka.remove_r(324)).to eq(32)
	  expect(moka.remove_r(3797)).to eq(379)
	  expect(moka.remove_r(44443797)).to eq(4444379)
	end

	it "확인하기" do
	  expect(moka.check(3797)).to eq(true)
	  expect(moka.check(324)).to eq(false)
	end

	it "답구하기" do
	  expect(moka.result).to eq(11)
	end

end