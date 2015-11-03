class Moka
  def power(n, k)
  	(n**k).to_s.chars.map(&:to_i).inject(:+)
  end

  def each_sum(n)
    # arr = []
    # a = find_cipher(n)
    # # arr << n/10
    # 1.upto(a) do |i|
    #   r = n - (n*0.1).to_i*10
    #   n = (n*0.1).to_i
    #   arr << r
    # end
    # arr.inject(:+)
  end

  def find_cipher(n)

    # a = 1
  #   begin 
  #     n / 10**a == 0 ? break : nil
  #     a = a+1
  #   end while true
  #   a
  end
end