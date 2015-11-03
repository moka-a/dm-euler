require 'spec_helper'
require 'prob_1'

describe "Multiple" do
  describe "problem test" do
    let(:multiple){Multiple.new}

    it "test" do
	    multiple.sum([3,5,6,9]).should == 23
	    multiple.sum([3,5,6,9,10,12,15,18]).should == 78
    end

	  it "solve" do
	    multiple.sum(1...1000).should == 233168
    end
    
  end	
end