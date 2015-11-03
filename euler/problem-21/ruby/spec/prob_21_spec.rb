require "spec_helper"
require "./prob_21"

describe "test" do
  let(:moka){Moka.new}

  it "약수의 합 구하기" do
    expect(moka.sum_of_aliquot(6)).to eq(6)
    expect(moka.sum_of_aliquot(12)).to eq(16)
    expect(moka.sum_of_aliquot(20)).to eq(22)
  end

  it "우애수 찾기" do
    expect(moka.find_wooesu(284)).to eq(true)
    expect(moka.find_wooesu(12)).to eq(false)
  end

  it "10000 이하의 우애수의 합 구하기" do
    expect(moka.sum_of_wooesu(10000)).to eq(31626)
  end
	
end